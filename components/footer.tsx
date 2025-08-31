import Link from "next/link";
import { Facebook, Instagram, Phone, MessageCircle } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Pandit Ramnaryan Mishra</p>
          <p className="text-sm text-muted-foreground">
            Vedic Hindu Pooja & Ritual Services
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <nav className="flex flex-col gap-3 text-sm md:flex-row md:items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+919873892736"
            className="rounded-md border px-2 py-1 text-sm inline-flex items-center gap-1"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href="https://wa.me/919873892736"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-2 py-1 text-sm inline-flex items-center gap-1"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="rounded-md border p-2"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-md border p-2"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
