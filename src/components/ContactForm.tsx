"use client";

import { useState, type FormEvent } from "react";

type Status = { type: "idle" | "sending" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ type: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", body: new FormData(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to send enquiry");
      form.reset();
      setStatus({ type: "success", message: "Thank you! Your enquiry has been sent. We'll get back to you soon." });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Something went wrong" });
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}><div className="form-grid">
      <div className="field"><label htmlFor="name">Name</label><input id="name" name="Name" placeholder="Your name" required /></div>
      <div className="field"><label htmlFor="company">Company</label><input id="company" name="Company" placeholder="Company name" /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="Email" type="email" placeholder="name@company.com" required /></div>
      <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="Phone" placeholder="+91 ..." /></div>
      <div className="field"><label htmlFor="type">Requirement</label><select id="type" name="Requirement"><option>Wooden pallets</option><option>Export pallets</option><option>Wooden boxes / crates</option><option>Industrial packing</option><option>Heat treatment / fumigation</option><option>Lashing / chocking</option><option>Custom solution</option></select></div>
      <div className="field"><label htmlFor="qty">Quantity</label><input id="qty" name="Quantity" placeholder="e.g. 200 pallets" /></div>
      <div className="field full"><label htmlFor="message">Size, load, delivery location &amp; notes</label><textarea id="message" name="Details" placeholder="Example: 1200 × 1000 mm, 1,200 kg dynamic load, 250 qty, delivery to ..." required /></div>
      <div className="field full">
        <button className="button button-primary" type="submit" disabled={status.type === "sending"}>
          {status.type === "sending" ? "Sending..." : "Send enquiry"}
        </button>
        {status.message && (
          <p className="form-note" role="status" aria-live="polite" style={{ color: status.type === "error" ? "#ff6b6b" : "#5fd38d" }}>
            {status.message}
          </p>
        )}
      </div>
    </div></form>
  );
}
