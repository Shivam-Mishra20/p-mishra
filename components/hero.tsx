// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Trans } from "@/components/translator-provider"

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
//         <div className="grid gap-8 md:grid-cols-2 md:items-center">
//           <div className="space-y-5">
//             <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-5xl">
//               <Trans>Pandit Ramnaryan Mishra</Trans>
//             </h1>
//             <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
//               <Trans>
//                 Vedic Pooja, Katha, Sanskar, and Ritual Services performed with devotion and authentic vidhi. Book
//                 trusted Hindu priest services for your home, family, and auspicious occasions.
//               </Trans>
//             </p>
//             <div className="flex flex-wrap items-center gap-3">
//               <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
//                 <Link href="/contact">
//                   <Trans>Book Pooja</Trans>
//                 </Link>
//               </Button>
//               <Button asChild variant="outline">
//                 <Link href="/services">
//                   <Trans>View All Services</Trans>
//                 </Link>
//               </Button>
//             </div>
//             <ul className="mt-3 grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
//               <li className="rounded-md border p-2">
//                 <Trans>Griha Pravesh</Trans>
//               </li>
//               <li className="rounded-md border p-2">
//                 <Trans>Satyanarayan Katha</Trans>
//               </li>
//               <li className="rounded-md border p-2">
//                 <Trans>Vivah Pooja</Trans>
//               </li>
//               <li className="rounded-md border p-2">
//                 <Trans>Navgrah Shanti</Trans>
//               </li>
//               <li className="rounded-md border p-2">
//                 <Trans>Mundan</Trans>
//               </li>
//               <li className="rounded-md border p-2">
//                 <Trans>Annaprashan</Trans>
//               </li>
//             </ul>
//           </div>
//           <div className="relative">
//             <img
//               alt="Pandit ji performing a Vedic pooja"
//               src="/hindu-priest-performing-vedic-pooja.png"
//               className="h-auto w-full rounded-xl border object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trans } from "@/components/translator-provider";
import {
  Sparkles,
  Home,
  BookOpen,
  Heart,
  Sun,
  Scissors,
  Utensils,
} from "lucide-react"; // icons

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-pretty text-4xl font-bold tracking-tight md:text-2xl">
              <Trans>Pandit Ramnaryan Mishra</Trans>
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              <Trans>
                Vedic Pooja, Katha, Sanskar, and Ritual Services performed with
                devotion and authentic vidhi. Book trusted Hindu priest services
                for your home, family, and auspicious occasions.
              </Trans>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                <Link href="/contact">
                  <Sparkles className="mr-2 h-4 w-4" />
                  <Trans>Book Pooja</Trans>
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">
                  <Trans>View All Services</Trans>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <img
              alt="Pandit ji performing a Vedic pooja"
              src="/hindu-priest-performing-vedic-pooja.png"
              className="h-auto w-full rounded-xl border object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-center text-2xl font-semibold md:text-3xl">
            <Trans> All Vedic Services</Trans>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card className="hover:shadow-md transition">
              <CardHeader>
                <Home className="h-8 w-8 text-amber-600" />
                <CardTitle>
                  <Trans>Griha Pravesh</Trans>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <Trans>
                  Bring positive energy and blessings to your new home.
                </Trans>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-amber-600" />
                <CardTitle>
                  <Trans>Satyanarayan Katha</Trans>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <Trans>
                  Seek divine blessings for prosperity and well-being.
                </Trans>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition">
              <CardHeader>
                <Heart className="h-8 w-8 text-amber-600" />
                <CardTitle>
                  <Trans>Vivah Pooja</Trans>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <Trans>
                  Sacred rituals for a blissful and harmonious married life.
                </Trans>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition">
              <CardHeader>
                <Sun className="h-8 w-8 text-amber-600" />
                <CardTitle>
                  <Trans>Navgrah Shanti</Trans>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <Trans>
                  Balance planetary influences and bring peace in life.
                </Trans>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition">
              <CardHeader>
                <Scissors className="h-8 w-8 text-amber-600" />
                <CardTitle>
                  <Trans>Mundan</Trans>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <Trans>Traditional hair removal ceremony for children.</Trans>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition">
              <CardHeader>
                <Utensils className="h-8 w-8 text-amber-600" />
                <CardTitle>
                  <Trans>Annaprashan</Trans>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <Trans>
                  First rice-feeding ceremony to bless your child’s growth.
                </Trans>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
