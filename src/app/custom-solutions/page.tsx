import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";

export const metadata = { title: "Custom Solutions" };

export default function CustomSolutionsPage() {
  const steps = [
    ["01", "Understand the cargo", "Dimensions, weight, centre of gravity, lift points, fragility and storage duration."],
    ["02", "Map the journey", "Forklifts, cranes, truck movement, container loading, sea or air freight and handling frequency."],
    ["03", "Engineer the system", "Base structure, blocking, enclosure, corrosion barrier, restraint and treatment requirements."],
    ["04", "Prepare for dispatch", "Build, pack, inspect and coordinate final lashing or container securing when required."],
  ];
  return <>
    <PageHero kicker="CUSTOM ENGINEERING" title="When standard packaging is not enough." text="Oversized, fragile, high-value or irregular cargo benefits from a packaging system designed around the full handling and shipment condition." visual="crate" />
    <section className="content-section light-surface"><div className="content-shell"><div className="cards-intro"><h2>From unusual geometry to a repeatable packing method.</h2><p>Custom does not need to mean complicated. The goal is to convert an unusual shipment into a clear, buildable and repeatable packaging specification.</p></div><div className="custom-steps">{steps.map(([num,title,text]) => <div className="custom-step" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
    <QuoteBand title="Have a drawing, photo or unusual load?" text="Send what you have. A basic sketch, dimensions and approximate weight are enough to start the conversation." />
  </>;
}
