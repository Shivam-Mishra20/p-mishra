"use client";

import React from "react";

type Lang = "en" | "hi";
type TranslatorContextValue = { lang: Lang; setLang: (l: Lang) => void };

const TranslatorContext = React.createContext<
  TranslatorContextValue | undefined
>(undefined);

export function useTranslator() {
  const ctx = React.useContext(TranslatorContext);
  if (!ctx)
    throw new Error("useTranslator must be used within TranslatorProvider");
  return ctx;
}

export function TranslatorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = React.useState<Lang>("en");

  React.useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("lang") as Lang | null)) ||
      null;
    if (saved === "hi" || saved === "en") setLang(saved);
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <TranslatorContext.Provider value={{ lang, setLang }}>
      {children}
    </TranslatorContext.Provider>
  );
}

export function Trans({ children }: { children: string }) {
  const { lang } = useTranslator();
  const original = children;
  const [text, setText] = React.useState(original);

  React.useEffect(() => {
    let active = true;
    async function translate() {
      if (lang === "en") {
        if (active) setText(original);
        return;
      }
      try {
        if (original.length > 600) {
          if (active) setText(original);
          return;
        }
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q: original, source: "en", target: "hi" }),
          cache: "no-store",
        });
        if (!res.ok) {
          if (active) setText(original);
          return;
        }
        const data = await res.json();
        if (active) setText(data.translatedText || original);
      } catch {
        if (active) setText(original);
      }
    }
    translate();
    return () => {
      active = false;
    };
  }, [lang, original]);

  return <>{text}</>;
}
