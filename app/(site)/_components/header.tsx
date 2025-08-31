"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Trans } from "@/components/translator-provider";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        {/* Logo */}
        <Link href="/" className="text-base font-semibold">
          <Image
            src="/logo.png"
            alt="Pandit Ramnaryan Mishra Logo"
            width={60}
            height={30}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
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

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://wa.me/919873892736?text=Namaste%20Pandit%20ji%2C%20mujhe%20pooja%20book%20karni%20hai."
            className="rounded-md border px-3 py-2 text-sm font-medium text-green-700 hover:bg-green-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Trans>WhatsApp</Trans>
          </a>
          <a
            href="tel:+919873892736"
            className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            <Trans>Call</Trans>
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-md border hover:bg-accent"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-72 px-6 py-6 flex flex-col items-center justify-center h-full"
            >
              <SheetHeader className="mb-6 flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </SheetHeader>

              {/* Nav links */}
              <nav className="flex flex-col items-center gap-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base font-medium ${
                      pathname === item.href
                        ? "text-amber-700"
                        : "text-foreground"
                    }`}
                  >
                    <Trans>{item.label}</Trans>
                  </Link>
                ))}
              </nav>

              {/* Buttons inside menu */}
              <div className="mt-6 flex flex-col items-center gap-3 w-full">
                <a
                  href="https://wa.me/919873892736?text=Namaste%20Pandit%20ji%2C%20mujhe%20pooja%20book%20karni%20hai."
                  className="w-full text-center rounded-md border px-3 py-2 text-sm font-medium text-green-700 hover:bg-green-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Trans>WhatsApp</Trans>
                </a>
                <a
                  href="tel:+919873892736"
                  className="w-full text-center rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent"
                >
                  <Trans>Call</Trans>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
