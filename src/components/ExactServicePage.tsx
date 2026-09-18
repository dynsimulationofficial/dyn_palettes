import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ExactServiceContent } from "@/data/serviceExactContent";

const galleryHeroImages: Record<string, string> = {
  "heat-treatment": "https://images.unsplash.com/photo-1764046155497-ad7e50737ffa?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "fumigation": "https://images.unsplash.com/photo-1778830355680-b76a22f6835f?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "industrial-packing": "https://images.unsplash.com/photo-1779517226273-bcf843b759b9?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "container-lashing-chocking": "https://images.unsplash.com/photo-1779517226273-bcf843b759b9?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "palletisation": "https://images.unsplash.com/photo-1764046155497-ad7e50737ffa?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "skid-packing": "https://images.unsplash.com/photo-1772678144531-3552c0d39582?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "vci-packing": "https://images.unsplash.com/photo-1772678144531-3552c0d39582?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "vacuum-packing": "https://images.unsplash.com/photo-1778830355680-b76a22f6835f?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
};

function inline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function cleanHeading(line: string) {
  return line
    .replace(/^#{1,3}\s*/, "")
    .replace(/^\[H[123]\]\s*/, "")
    .replace(/^\*\*/, "")
    .replace(/\*\*$/, "")
    .trim();
}

function isH2(line: string) {
  const value = line.trim();
  return /^(?:#{1,3}\s*)?\[H2\]\s+/.test(value) || (/^#\s+/.test(value) && !/\[H1\]/.test(value));
}

function isH3(line: string) {
  const value = line.trim();
  return /^(?:#{1,3}\s*)?\[H3\]\s+/.test(value) || /^###\s+/.test(value);
}

function isTableSeparator(line: string) {
  return /^\|?\s*:?-{3,}/.test(line.trim()) && line.includes("|");
}

function splitTableRow(line: string) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function isOverline(line: string) {
  const cleaned = line.replace(/\*\*/g, "").trim();
  return cleaned.length > 3 && cleaned.length < 64 && /^[A-Z0-9][A-Z0-9 &/+\-–—]+$/.test(cleaned);
}

function renderMarkdown(raw: string, keyPrefix: string, options: { facts?: boolean } = {}) {
  const lines = raw.split("\n");
  const output: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const original = lines[i];
    const line = original.trim();

    if (!line) {
      i += 1;
      continue;
    }

    if (isH2(line)) {
      output.push(<h2 key={`${keyPrefix}-h2-${i}`}>{inline(cleanHeading(line))}</h2>);
      i += 1;
      continue;
    }

    if (isH3(line)) {
      output.push(<h3 key={`${keyPrefix}-h3-${i}`}>{inline(cleanHeading(line))}</h3>);
      i += 1;
      continue;
    }

    const ctaMatch = line.replace(/^\*\*/, "").replace(/\*\*$/, "").match(/^CTA:\s*(.+)$/i);
    if (ctaMatch) {
      const buttons: string[] = [];
      while (i < lines.length) {
        const candidate = lines[i].trim();
        if (!candidate) {
          i += 1;
          continue;
        }
        const match = candidate.replace(/^\*\*/, "").replace(/\*\*$/, "").match(/^CTA:\s*(.+)$/i);
        if (!match) break;
        buttons.push(match[1]);
        i += 1;
      }
      output.push(
        <div className="exact-service-actions" key={`${keyPrefix}-cta-${i}`}>
          {buttons.map((label) => (
            <Link href="/contact" className="button button-primary" key={label}>
              {inline(label)} <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </div>,
      );
      continue;
    }

    if (options.facts) {
      const boldFact = line.match(/^\*\*([^*]+):\*\*\s*(.+)$/);
      const plainFact = line.match(/^([^:*]{2,42}):\s+(.+)$/);
      const fact = boldFact ?? plainFact;
      if (fact) {
        output.push(
          <div className="exact-service-fact" key={`${keyPrefix}-fact-${i}`}>
            <strong>{fact[1]}:</strong>
            <span>{inline(fact[2])}</span>
          </div>,
        );
        i += 1;
        continue;
      }
    }

    if (isOverline(line)) {
      output.push(<p className="exact-service-overline" key={`${keyPrefix}-overline-${i}`}>{inline(line.replace(/\*\*/g, ""))}</p>);
      i += 1;
      continue;
    }

    if (/^(?:\*|•|-)\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length) {
        const candidate = lines[i].trim();
        const match = candidate.match(/^(?:\*|•|-)\s+(.+)$/);
        if (!match) break;
        items.push(match[1]);
        i += 1;
      }
      output.push(<ul className="exact-service-list" key={`${keyPrefix}-ul-${i}`}>{items.map((item) => <li key={item}>{inline(item)}</li>)}</ul>);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: { title: string; detail?: string }[] = [];
      while (i < lines.length) {
        const candidate = lines[i].trim();
        const match = candidate.match(/^\d+\.\s+(.+)$/);
        if (!match) break;
        const item = { title: match[1], detail: undefined as string | undefined };
        i += 1;
        while (i < lines.length && !lines[i].trim()) i += 1;
        if (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*\d+\.\s+/.test(lines[i])) {
          item.detail = lines[i].trim();
          i += 1;
        }
        items.push(item);
        while (i < lines.length && !lines[i].trim()) i += 1;
      }
      output.push(
        <ol className="exact-service-numbered" key={`${keyPrefix}-ol-${i}`}>
          {items.map((item) => <li key={`${item.title}-${item.detail ?? ""}`}><strong>{inline(item.title)}</strong>{item.detail ? <span>{inline(item.detail)}</span> : null}</li>)}
        </ol>,
      );
      continue;
    }

    if (line.startsWith("|") && line.includes("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].includes("|")) {
        if (!isTableSeparator(lines[i])) rows.push(splitTableRow(lines[i]));
        i += 1;
      }
      if (rows.length) {
        const [head, ...body] = rows;
        output.push(
          <div className="exact-service-table-wrap" key={`${keyPrefix}-table-${i}`}>
            <table><thead><tr>{head.map((cell) => <th key={cell}>{inline(cell)}</th>)}</tr></thead><tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${cellIndex}-${cell}`}>{inline(cell)}</td>)}</tr>)}</tbody></table>
          </div>,
        );
      }
      continue;
    }

    const strongOnly = line.match(/^\*\*(.+)\*\*$/);
    if (strongOnly) {
      output.push(<p className="exact-service-label" key={`${keyPrefix}-label-${i}`}><strong>{inline(strongOnly[1])}</strong></p>);
      i += 1;
      continue;
    }

    output.push(<p key={`${keyPrefix}-p-${i}`}>{inline(line)}</p>);
    i += 1;
  }

  return output;
}

function extractFaqs(body: string) {
  const lines = body.split("\n");
  const faqStart = lines.findIndex((line) => isH2(line) && cleanHeading(line).toLowerCase().includes("frequently asked questions"));
  if (faqStart < 0) return [];

  const faqs: { question: string; answer: string }[] = [];
  for (let i = faqStart + 1; i < lines.length; i += 1) {
    if (isH2(lines[i])) break;
    if (!isH3(lines[i])) continue;
    const question = cleanHeading(lines[i]);
    let answer = "";
    for (let j = i + 1; j < lines.length; j += 1) {
      const candidate = lines[j].trim();
      if (!candidate) continue;
      if (isH2(candidate) || isH3(candidate)) break;
      answer = candidate.replace(/\*\*/g, "");
      break;
    }
    if (answer) faqs.push({ question, answer });
  }
  return faqs;
}

function splitIntro(raw: string) {
  const lines = raw.split("\n");
  const leadIndexes: number[] = [];

  for (let index = 0; index < lines.length && leadIndexes.length < 2; index += 1) {
    const line = lines[index].trim();
    if (!line) continue;
    if (/^CTA:\s*/i.test(line.replace(/^\*\*/, "").replace(/\*\*$/, ""))) break;
    if (/^(?:\*|•|-)\s+/.test(line) || /^\d+\.\s+/.test(line) || isOverline(line)) continue;
    leadIndexes.push(index);
  }

  const leadSet = new Set(leadIndexes);
  return {
    lead: lines.filter((_, index) => leadSet.has(index)).join("\n").trim(),
    remainder: lines.filter((_, index) => !leadSet.has(index)).join("\n").trim(),
  };
}

function splitH2Sections(raw: string) {
  const lines = raw.split("\n");
  const sections: { heading: string; body: string }[] = [];
  let current: { heading: string; lines: string[] } | null = null;

  for (const line of lines) {
    if (isH2(line)) {
      if (current) sections.push({ heading: current.heading, body: current.lines.join("\n").trim() });
      current = { heading: cleanHeading(line), lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }

  if (current) sections.push({ heading: current.heading, body: current.lines.join("\n").trim() });
  return sections;
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ExactServicePage({ page, siteUrl }: { page: ExactServiceContent; siteUrl: string }) {
  const bodyLines = page.body.split("\n");
  const firstSection = bodyLines.findIndex((line) => isH2(line));
  const introRaw = (firstSection >= 0 ? bodyLines.slice(0, firstSection) : bodyLines).join("\n").trim();
  const mainRaw = (firstSection >= 0 ? bodyLines.slice(firstSection) : []).join("\n").trim();
  const { lead: heroLead, remainder: introRemainder } = splitIntro(introRaw);
  const sections = splitH2Sections(mainRaw);
  const breadcrumbParts = page.breadcrumb.split(">").map((part) => part.trim()).filter(Boolean);
  const pagePath = `/services/${page.slug}`;
  const pageUrl = siteUrl ? `${siteUrl}${pagePath}` : pagePath;
  const faqs = extractFaqs(page.body);
  const heroImage = galleryHeroImages[page.slug] ?? galleryHeroImages["industrial-packing"];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.metaDescription,
    url: pageUrl,
    provider: { "@type": "Organization", name: "DYN Pallets", url: siteUrl || undefined },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbParts.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: index === 0 ? (siteUrl ? `${siteUrl}/` : "/") : index === 1 ? (siteUrl ? `${siteUrl}/services` : "/services") : pageUrl,
    })),
  };
  const faqSchema = faqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  } : null;

  return <>
    <JsonLd data={serviceSchema} />
    <JsonLd data={breadcrumbSchema} />
    {faqSchema ? <JsonLd data={faqSchema} /> : null}

    <section className="exact-service-hero texture-grid">
      <div className="exact-service-hero-grid">
        <div className="exact-service-hero-copy">
          <nav className="exact-service-breadcrumbs" aria-label="Breadcrumb">
            {breadcrumbParts.map((part, index) => <span key={part}>{index > 0 ? <i>/</i> : null}{index === 0 ? <Link href="/">{part}</Link> : index === 1 ? <Link href="/services">{part}</Link> : <b>{part}</b>}</span>)}
          </nav>
          <h1>{page.h1}</h1>
          <div className="exact-service-hero-lead">{renderMarkdown(heroLead, `${page.slug}-hero`)}</div>
        </div>

        <div className="exact-service-hero-visual" role="img" aria-label={page.h1}>
          <div className="exact-service-hero-image" style={{ backgroundImage: `url('${heroImage}')` }} />
          <div className="exact-service-hero-shade" />
          <div className="exact-service-hero-gridlines" aria-hidden="true" />
          <div className="exact-service-hero-scan" aria-hidden="true" />
          <span className="exact-service-hero-corner exact-service-hero-corner-a" aria-hidden="true" />
          <span className="exact-service-hero-corner exact-service-hero-corner-b" aria-hidden="true" />
        </div>
      </div>
    </section>

    {introRemainder ? (
      <section className="exact-service-overview light-surface">
        <div className="exact-service-shell exact-service-overview-grid">
          <div className="exact-service-overview-rail" aria-hidden="true"><span /></div>
          <div className="exact-service-overview-content">
            {renderMarkdown(introRemainder, `${page.slug}-intro`, { facts: true })}
          </div>
        </div>
      </section>
    ) : null}

    <article className="exact-service-article">
      {sections.map((section, index) => (
        <section className={`exact-service-section exact-service-section-${index % 3}`} key={`${page.slug}-${section.heading}`}>
          <div className="exact-service-shell exact-service-section-grid">
            <header className="exact-service-section-heading">
              <h2>{inline(section.heading)}</h2>
              <span className="exact-service-section-rule" aria-hidden="true" />
            </header>
            <div className="exact-service-section-body">
              {renderMarkdown(section.body, `${page.slug}-section-${index}`)}
            </div>
          </div>
        </section>
      ))}
    </article>
  </>;
}
