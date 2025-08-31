import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pandit Ramnaryan Mishra | Vedic Hindu Priest",
  description:
    "Know more about Pandit Ramnaryan Mishra – a highly experienced Vedic Hindu priest specializing in Griha Pravesh, Satyanarayan Katha, Vivah Pooja, Navgrah Shanti, Sanskar, and Dharmic rituals with devotion and authenticity.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 md:py-20">
      {/* Heading */}
      <h1 className="text-pretty text-3xl font-bold md:text-5xl">
        About Pandit Ramnaryan Mishra
      </h1>

      {/* Intro */}
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Pandit Ramnaryan Mishra is a renowned{" "}
        <strong>Vedic Hindu priest</strong>
        with decades of experience in performing sacred rituals and guiding
        families through important life events with devotion and authenticity.
        His deep knowledge of the <em>Vedas, Puranas, Mantras,</em> and Hindu
        traditions makes him a trusted spiritual guide for countless devotees
        across India and abroad.
      </p>

      {/* Images */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <img
          alt="Pandit ji performing havan"
          src="/hindu-priest-performing-vedic-pooja.png"
          className="h-auto w-full rounded-lg border shadow-md object-cover"
        />
        <img
          alt="Pandit ji conducting Satyanarayan Katha"
          src="/satyanarayan-katha-by-pandit.png"
          className="h-auto w-full rounded-lg border shadow-md object-cover"
        />
      </div>

      {/* Experience */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Experience & Background</h2>
        <p className="text-muted-foreground leading-relaxed">
          With years of dedicated service, Pandit ji has successfully conducted
          numerous religious ceremonies, ensuring that every ritual is performed
          with <strong>precision, devotion, and proper Vedic chanting</strong>.
          His calm nature, clarity in explanations, and humble approach make him
          the first choice for families seeking both authenticity and comfort in
          religious practices.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Expert in Vedic rituals, Sanskar, and Shraadh karmas</li>
          <li>Provides clear instructions with step-by-step Pooja Vidhi</li>
          <li>
            Specialist in{" "}
            <em>Graha Shanti, Navgrah Pooja, and Vivah Sanskar</em>
          </li>
          <li>Known for punctuality, discipline, and devotional sincerity</li>
        </ul>
      </section>

      {/* Specializations */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Specializations</h2>
        <p className="text-muted-foreground leading-relaxed">
          Pandit ji is proficient in performing a wide variety of{" "}
          <strong>Hindu religious services</strong>, including but not limited
          to:
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
          <ul className="list-disc pl-5 space-y-1">
            <li>Griha Pravesh Pooja</li>
            <li>Satyanarayan Katha</li>
            <li>Vivah Pooja & Sanskar</li>
            <li>Navgrah Shanti Pooja</li>
          </ul>
          <ul className="list-disc pl-5 space-y-1">
            <li>Namakaran Sanskar</li>
            <li>Upanayan Sanskar (Janeu)</li>
            <li>Ganesh & Lakshmi Pooja</li>
            <li>Vastu Shanti Pooja</li>
          </ul>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Philosophy & Approach</h2>
        <p className="text-muted-foreground leading-relaxed">
          For Pandit Ramnaryan Mishra, performing rituals is not just a
          tradition, but a way to connect individuals with divine energies. His
          focus remains on <strong>authentic Vedic chanting</strong> and
          ensuring that every family understands the spiritual meaning behind
          the rituals. His mission is to spread <em>Sanatan Dharma</em> values
          and bring positivity, peace, and blessings to every household.
        </p>
      </section>

      {/* Closing */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Why Choose Pandit ji?</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Trusted by hundreds of families across generations</li>
          <li>Available for ceremonies across India and abroad</li>
          <li>Blends tradition with modern understanding for clarity</li>
          <li>Ensures rituals are performed with devotion and authenticity</li>
        </ul>
      </section>
    </main>
  );
}
