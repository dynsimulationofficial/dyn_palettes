import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function QuoteBand({ title = "Have a size, drawing or load requirement?", text = "Send the dimensions, quantity, expected load and delivery location. We’ll help shape the right packaging approach." }: { title?: string; text?: string }) {
  return <section className="quote-band"><span className="exact-fx-stamp dyn-quote-stamp" aria-hidden="true" /><div><span className="kicker">FAST B2B ENQUIRY</span><h2>{title}</h2><p>{text}</p></div><Link href="/contact" className="button button-light">Share requirement <ArrowUpRight size={18} /></Link></section>;
}
