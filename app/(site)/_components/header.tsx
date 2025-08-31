"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Trans } from "@/components/translator-provider";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-base font-semibold">
          <Image
            src="/logo.png"
            alt="Pandit Ramnaryan Mishra Logo"
            width={60}
            height={30}
            className="object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm hover:underline ${
                pathname === item.href ? "text-amber-700" : "text-foreground"
              }`}
            >
              <Trans>{item.label}</Trans>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919873892736?text=Namaste%20Pandit%20ji%2C%20mujhe%20pooja%20book%20karni%20hai."
            className="hidden rounded-md border px-2 py-1 text-sm font-medium text-green-700 md:inline-block"
            aria-label="Chat on WhatsApp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Trans>WhatsApp</Trans>
          </a>
          <a
            href="tel:+919873892736"
            className="hidden rounded-md border px-2 py-1 text-sm font-medium md:inline-block"
          >
            <Trans>Call</Trans>
          </a>
          {/* <LanguageToggle /> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
