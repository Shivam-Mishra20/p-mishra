"use client";

import { Button } from "@/components/ui/button";
import { useTranslator } from "@/components/translator-provider";

export function LanguageToggle() {
  const { lang, setLang } = useTranslator();
  return (
    <div
      className="inline-flex items-center gap-1"
      aria-label="Language toggle"
    >
      <Button
        variant={lang === "en" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </Button>
      <Button
        variant={lang === "hi" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLang("hi")}
        aria-pressed={lang === "hi"}
      >
        HI
      </Button>
    </div>
  );
}
