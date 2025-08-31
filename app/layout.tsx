import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

// Add theme provider and site chrome
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/app/(site)/_components/header";
import { SiteFooter } from "@/components/footer";
import { TranslatorProvider } from "@/components/translator-provider";

export const metadata: Metadata = {
  title: "Pandit Ramnaryan Mishra | Hindu Pooja & Ritual Services",
  description:
    "Book trusted Hindu priest services by Pandit Ramnaryan Mishra: Griha Pravesh, Satyanarayan Katha, Vivah Pooja, Navgrah Shanti and more.",
  generator: "v0.app",
  metadataBase: new URL("https://example.com"),
  keywords: [
    "Pandit for Pooja",
    "Book Pandit",
    "Griha Pravesh",
    "Satyanarayan Katha",
    "Hindu rituals",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", type: "image/png", sizes: "64x64" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {/* Theme provider enables dark/light toggle across the app */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Translator provider for EN ↔ HI */}
          <TranslatorProvider>
            <Suspense fallback={null}>
              <SiteHeader />
              {children}
              <SiteFooter />
              <Analytics />
            </Suspense>
          </TranslatorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
