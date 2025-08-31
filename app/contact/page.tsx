import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Book Pooja",
  description:
    "Contact Pandit Ramnaryan Mishra to book a pooja or ritual. WhatsApp and Call Now options available.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <header className="mb-6 space-y-2">
        <h1 className="text-3xl font-semibold md:text-4xl">Contact</h1>
        <p className="text-muted-foreground">
          Reach out for bookings, queries, and auspicious dates.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <ContactForm />
        <div className="rounded-xl border">
          <iframe
            title="Pandit ji location map"
            className="h-[420px] w-full rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.156674959657!2d77.2603128024747!3d28.65105911047035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc94327fab8f%3A0xedbb63c9548f1219!2sGeeta%20Colony%2C%20Delhi!5e0!3m2!1sen!2sin!4v1756640224356!5m2!1sen!2sin"
          />
        </div>
      </div>
    </main>
  );
}
