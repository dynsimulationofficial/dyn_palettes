import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "4rem 1.5rem", maxWidth: "720px", margin: "0 auto" }}>
      <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", color: "#d98643", fontSize: "0.76rem", marginBottom: "1rem" }}>
        404 Error
      </p>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>Page not found</h1>
      <p style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>
        The page you were looking for does not exist or may have moved.
      </p>
      <Link href="/" style={{ color: "#f2bf85", textDecoration: "underline" }}>Return to the homepage</Link>
    </main>
  );
}
