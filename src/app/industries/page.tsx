import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { industries } from "@/data/site";

export const metadata = { title: "Industries" };

export default function IndustriesPage() {
  return <>
    <PageHero kicker="INDUSTRIES" title="Different cargo. Different constraints." text="Packaging decisions change with the industry: hygiene, returnability, high loads, corrosion risk, export treatment and warehouse automation all influence the right format." visual="box" />
    <section className="cards-page light-surface"><div className="industry-page-grid">{industries.map(([name, text], i) => <div className="industry-page-card" key={name}><span>{String(i + 1).padStart(2, "0")} · INDUSTRY</span><h3>{name}</h3><p>{text}</p></div>)}</div></section>
    <QuoteBand />
  </>;
}
