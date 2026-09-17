import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { navProducts, services } from "@/data/site";
import { siteConfig } from "@/data/config";

export default function Footer() {
  const companyLinks = [
    { label: "About us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact us", href: "/contact" },
  ];

  const policyLinks = [
    { label: "Terms & Conditions", href: "/contact" },
    { label: "Privacy Policy", href: "/contact" },
  ];

  const productLinks = navProducts.slice(0, 4).map((product) => ({
    label: product.name,
    href: `/products/${product.slug}`,
  }));

  const serviceLinks = services.slice(0, 4).map((service) => ({
    label: service.name,
    href: `/services/${service.slug}`,
  }));

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-top-grid">
          <div className="footer-brand-block">
            <Link href="/" className="brand footer-brand">
              <Image
                className="brand-logo"
                src="/dyn-mark.svg"
                alt="DYN PALLETS"
                width={39}
                height={39}
                unoptimized
              />

              <span className="brand-type">
                <strong>DYN</strong>
                <b>PALLETS</b>
              </span>
            </Link>

            <p>{siteConfig.tagline}</p>

            <div className="footer-inline-mark" aria-hidden="true">
              <span className="wave" />
            </div>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            {companyLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <h4>Products</h4>
            {productLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="footer-more" href="/products">
              View all products
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            {serviceLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link className="footer-more" href="/services">
              View all services
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="footer-column">
            <h4>Company Policy</h4>
            {policyLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-column footer-contact-column">
            <h4>Contact</h4>

            <a href={siteConfig.phoneHref}>
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <a href={siteConfig.emailHref}>
              <Mail size={14} />
              {siteConfig.email}
            </a>
            <span>
              <MapPin size={14} />
              {siteConfig.location}
            </span>
          </div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          DYN PALLETS
        </div>

        <div className="footer-bottom-strip">
          <div className="footer-legal-left">
            <span className="footer-mini-mark" aria-hidden="true">D</span>
            <span>© {new Date().getFullYear()} DYN PALLETS. ALL RIGHTS RESERVED.</span>
          </div>

          <span className="footer-powered-text">
            Powered by{" "}
            <a
              href="https://www.dynsimulation.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dynsimulation Technologies Pvt Ltd
            </a>
          </span>
        </div>

        <div className="footer-bar-line" aria-hidden="true" />
      </div>
    </footer>
  );
}