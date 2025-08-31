"use client";

import * as React from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().min(5),
  poojaType: z.string().min(2),
});

export function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      poojaType: String(formData.get("poojaType") || ""),
    };

    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      setError("Please fill all required fields correctly.");
      setLoading(false);
      return;
    }

    try {
      // ✅ Send data to Next.js API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccess("✅ Thank you! We will contact you shortly.");
        form.reset();
      } else {
        setError("❌ Failed to submit form. Try again.");
      }
    } catch (err) {
      setError("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-xl border p-4 md:grid-cols-2 md:p-6"
      aria-labelledby="contact-heading"
    >
      <div className="md:col-span-2">
        <h2 id="contact-heading" className="text-xl font-semibold">
          Contact Form
        </h2>
        <p className="text-sm text-muted-foreground">
          Fill the form and we will reach out soon.
        </p>
      </div>

      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input id="name" name="name" required placeholder="Your full name" />
      </div>

      <div className="grid gap-1">
        <label htmlFor="phone" className="text-sm font-medium">
          Mobile
        </label>
        <Input id="phone" name="phone" required placeholder="+91 98XXXXXXXX" />
      </div>

      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="poojaType" className="text-sm font-medium">
          Type of Pooja
        </label>
        <Input
          id="poojaType"
          name="poojaType"
          required
          placeholder="e.g., Griha Pravesh"
        />
      </div>

      <div className="grid gap-1 md:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Your message or details..."
        />
      </div>

      <div className="md:col-span-2 flex items-center gap-3">
        <Button
          type="submit"
          className="bg-amber-600 text-white hover:bg-amber-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>

        <a
          className="inline-flex items-center text-sm font-medium text-green-600 underline underline-offset-4"
          href="https://wa.me/919873892736?text=Namaste%20Pandit%20ji%2C%20I%20wish%20to%20book%20a%20pooja."
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <a
          className="inline-flex items-center text-sm font-medium text-amber-700 underline underline-offset-4"
          href="tel:+919873892736"
        >
          Call Now
        </a>
      </div>

      {success && <p className="text-green-600 text-sm">{success}</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
}
