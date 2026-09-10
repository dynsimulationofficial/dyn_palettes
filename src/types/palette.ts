export interface ColorItem {
  id: string;
  hex: string;
  isLocked: boolean;
  name?: string;
}

export type HarmonyMode =
  | 'random'
  | 'analogous'
  | 'monochromatic'
  | 'triadic'
  | 'tetradic'
  | 'complementary'
  | 'split-complementary'
  | 'pastel'
  | 'neon'
  | 'warm'
  | 'cool'
  | 'earthy';

export type ColorFormat = 'hex' | 'rgb' | 'hsl';

export type VisionMode =
  | 'normal'
  | 'protanopia'
  | 'deuteranopia'
  | 'tritanopia'
  | 'achromatopsia';

export interface SavedPalette {
  id: string;
  name: string;
  colors: string[];
  createdAt: number;
}
