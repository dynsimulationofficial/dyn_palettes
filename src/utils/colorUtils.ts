import { ColorItem, HarmonyMode, VisionMode } from '../types/palette';

// Basic conversions
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(c => c + c).join('');
  }
  const num = parseInt(cleanHex, 16);
  if (isNaN(num)) return { r: 0, g: 0, b: 0 };
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  const toHex = (v: number) => clamp(v).toString(16).padStart(2, '0');
  return '#' + toHex(r) + toHex(g) + toHex(b);
}

export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h = ((h % 360) + 360) % 360;
  h /= 360;
  s /= 100;
  l /= 100;

  if (s === 0) {
    const val = Math.round(l * 255);
    return { r: val, g: val, b: val };
  }

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

export function hslToHex(h: number, s: number, l: number): string {
  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
}

// Luminance & WCAG Contrast
export function getLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return Number(((brightest + 0.05) / (darkest + 0.05)).toFixed(2));
}

export function getWCAGRating(ratio: number): {
  aa: boolean;
  aaLarge: boolean;
  aaa: boolean;
  score: string;
} {
  return {
    aa: ratio >= 4.5,
    aaLarge: ratio >= 3.0,
    aaa: ratio >= 7.0,
    score: ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : ratio >= 3 ? 'AA+' : 'Fail',
  };
}

export function isDark(hex: string): boolean {
  return getLuminance(hex) < 0.45;
}

// Color Names
export function getColorName(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);

  if (l < 8) return 'Obsidian Black';
  if (l > 94 && s < 15) return 'Pure White';
  if (s < 12) {
    if (l < 30) return 'Charcoal Slate';
    if (l < 55) return 'Cool Gray';
    if (l < 80) return 'Silver Mist';
    return 'Alabaster';
  }

  let hueName = '';
  if (h < 15 || h >= 345) hueName = 'Crimson';
  else if (h < 35) hueName = 'Sunset Orange';
  else if (h < 50) hueName = 'Amber Gold';
  else if (h < 70) hueName = 'Solar Yellow';
  else if (h < 150) hueName = 'Emerald Green';
  else if (h < 175) hueName = 'Mint Cyan';
  else if (h < 200) hueName = 'Turquoise';
  else if (h < 250) hueName = 'Cobalt Blue';
  else if (h < 285) hueName = 'Royal Indigo';
  else if (h < 315) hueName = 'Vibrant Violet';
  else hueName = 'Magenta Rose';

  let modifier = '';
  if (l < 25) modifier = 'Deep ';
  else if (l < 40) modifier = 'Dark ';
  else if (l > 80) modifier = 'Soft ';
  else if (l > 65) modifier = 'Bright ';
  else if (s > 80) modifier = 'Vivid ';
  else if (s < 35) modifier = 'Dusty ';

  return modifier + hueName;
}

// Color Blindness Simulation
export function simulateColorBlindness(hex: string, mode: VisionMode): string {
  if (mode === 'normal') return hex;
  const { r, g, b } = hexToRgb(hex);

  let sr = r;
  let sg = g;
  let sb = b;

  if (mode === 'protanopia') {
    sr = 0.56667 * r + 0.43333 * g + 0.0 * b;
    sg = 0.55833 * r + 0.44167 * g + 0.0 * b;
    sb = 0.0 * r + 0.24167 * g + 0.75833 * b;
  } else if (mode === 'deuteranopia') {
    sr = 0.625 * r + 0.375 * g + 0.0 * b;
    sg = 0.7 * r + 0.3 * g + 0.0 * b;
    sb = 0.0 * r + 0.3 * g + 0.7 * b;
  } else if (mode === 'tritanopia') {
    sr = 0.95 * r + 0.05 * g + 0.0 * b;
    sg = 0.0 * r + 0.43333 * g + 0.56667 * b;
    sb = 0.0 * r + 0.475 * g + 0.525 * b;
  } else if (mode === 'achromatopsia') {
    const gray = 0.299 * r + 0.587 * g + 0.114 * b;
    sr = gray;
    sg = gray;
    sb = gray;
  }

  return rgbToHex(sr, sg, sb);
}

// Shades & Tints Generator
export function generateShades(baseHex: string): { step: number; hex: string; isBase: boolean }[] {
  const { r, g, b } = hexToRgb(baseHex);
  const { h, s, l } = rgbToHsl(r, g, b);

  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const lightnessMap: Record<number, number> = {
    50: 96,
    100: 90,
    200: 80,
    300: 70,
    400: 60,
    500: l,
    600: Math.max(15, Math.round(l * 0.8)),
    700: Math.max(12, Math.round(l * 0.65)),
    800: Math.max(8, Math.round(l * 0.45)),
    900: Math.max(5, Math.round(l * 0.3)),
    950: Math.max(3, Math.round(l * 0.18)),
  };

  return steps.map(step => {
    const targetL = lightnessMap[step];
    const targetS = step === 50 ? Math.max(10, Math.round(s * 0.4)) : step === 950 ? Math.min(100, Math.round(s * 1.1)) : s;
    return {
      step,
      hex: hslToHex(h, targetS, targetL).toUpperCase(),
      isBase: step === 500,
    };
  });
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generatePalette(
  count: number = 5,
  mode: HarmonyMode = 'random',
  currentPalette: ColorItem[] = []
): ColorItem[] {
  const baseHue = getRandomInt(0, 359);
  const result: ColorItem[] = [];

  for (let i = 0; i < count; i++) {
    const existing = currentPalette[i];
    if (existing && existing.isLocked) {
      result.push(existing);
      continue;
    }

    let h = baseHue;
    let s = getRandomInt(60, 95);
    let l = getRandomInt(40, 75);

    switch (mode) {
      case 'analogous':
        h = (baseHue + (i - Math.floor(count / 2)) * 25 + 360) % 360;
        s = getRandomInt(65, 90);
        l = getRandomInt(40, 70);
        break;

      case 'monochromatic':
        h = baseHue;
        s = getRandomInt(50, 85);
        l = Math.round(20 + (i / Math.max(1, count - 1)) * 65);
        break;

      case 'complementary':
        h = i % 2 === 0 ? baseHue : (baseHue + 180) % 360;
        h = (h + getRandomInt(-15, 15) + 360) % 360;
        l = getRandomInt(35, 75);
        break;

      case 'split-complementary':
        if (i === 0) h = baseHue;
        else if (i % 2 === 1) h = (baseHue + 150) % 360;
        else h = (baseHue + 210) % 360;
        l = getRandomInt(40, 75);
        break;

      case 'triadic':
        h = (baseHue + (i % 3) * 120 + getRandomInt(-10, 10)) % 360;
        l = getRandomInt(40, 70);
        break;

      case 'tetradic':
        h = (baseHue + (i % 4) * 90 + getRandomInt(-10, 10)) % 360;
        l = getRandomInt(40, 70);
        break;

      case 'pastel':
        h = (baseHue + i * (360 / count)) % 360;
        s = getRandomInt(55, 80);
        l = getRandomInt(78, 90);
        break;

      case 'neon':
        h = (baseHue + i * (360 / count)) % 360;
        s = getRandomInt(90, 100);
        l = getRandomInt(48, 60);
        break;

      case 'warm':
        h = (getRandomInt(340, 360 + 55)) % 360;
        s = getRandomInt(65, 95);
        l = getRandomInt(40, 75);
        break;

      case 'cool':
        h = getRandomInt(160, 270);
        s = getRandomInt(55, 90);
        l = getRandomInt(35, 75);
        break;

      case 'earthy':
        h = (getRandomInt(20, 80) + i * 20) % 360;
        s = getRandomInt(25, 55);
        l = getRandomInt(30, 65);
        break;

      case 'random':
      default:
        h = getRandomInt(0, 359);
        s = getRandomInt(50, 95);
        l = getRandomInt(35, 80);
        break;
    }

    const hex = hslToHex(h, s, l).toUpperCase();
    result.push({
      id: existing ? existing.id : 'col_' + Math.random().toString(36).substring(2, 9),
      hex,
      isLocked: false,
      name: getColorName(hex),
    });
  }

  return result;
}

export function getInitialPalette(): ColorItem[] {
  const defaultHexes = ['#2D31FA', '#5D8BF4', '#05DFD7', '#FF5D8F', '#F94892'];
  return defaultHexes.map((hex, idx) => ({
    id: 'col_init_' + idx,
    hex,
    isLocked: false,
    name: getColorName(hex),
  }));
}
