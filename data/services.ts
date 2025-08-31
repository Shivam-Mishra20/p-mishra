export type Pooja = {
  slug: string
  name: string
  shortDescription: string
  imageAlt: string
  image: string
  vidhan: string[]
  samagri: string[]
  benefits: string[]
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
  }
}

export const SERVICES: Pooja[] = [
  {
    slug: "griha-pravesh",
    name: "Griha Pravesh",
    shortDescription: "Auspicious housewarming ritual to invoke blessings and peace at a new home.",
    imageAlt: "Griha Pravesh Pooja kalash and rangoli",
    image: "/griha-pravesh-pooja-kalash-and-rangoli.png",
    vidhan: [
      "Ganesh Pujan and Sankalp",
      "Kalash Sthapana and Navgrah Pujan",
      "Vastu Shanti and Havan",
      "Purna Ahuti and Aarti",
    ],
    samagri: ["Kalash, Nariyal, Mango leaves", "Roli, Haldi, Chawal", "Havan Samagri, Ghee", "Flowers, Fruits, Sweets"],
    benefits: [
      "Removes negative energies",
      "Invokes prosperity and harmony",
      "Blesses the home with peace and wellbeing",
    ],
    seo: {
      title: "Griha Pravesh Pooja | Book Pandit for Housewarming",
      description:
        "Book Pandit Ramnaryan Mishra for Griha Pravesh. Complete Vastu Shanti, Ganesh Pujan, Navgrah Pujan, and Havan.",
      keywords: ["Griha Pravesh", "Housewarming Pooja", "Vastu Shanti"],
    },
  },
  {
    slug: "satyanarayan-katha",
    name: "Satyanarayan Katha",
    shortDescription: "Sacred Katha and Pooja to seek Lord Vishnu’s blessings for health and prosperity.",
    imageAlt: "Satyanarayan Katha setup with idols and kalash",
    image: "/satyanarayan-katha-pooja-setup.png",
    vidhan: [
      "Sankalp and Ganesh Pujan",
      "Satyanarayan Vrat Katha Path",
      "Havan and Purna Ahuti",
      "Aarti and Prasad Vitaran",
    ],
    samagri: ["Panchamrit, Tulsi leaves", "Fruits, Sweets, Flowers", "Havan Samagri, Ghee", "Roli, Haldi, Chawal"],
    benefits: [
      "Brings peace and prosperity",
      "Removes obstacles and negativity",
      "Bestows divine grace of Lord Vishnu",
    ],
  },
  {
    slug: "vivah-pooja",
    name: "Vivah Pooja",
    shortDescription: "Traditional Hindu marriage rituals conducted as per Vedic vidhi.",
    imageAlt: "Vivah Pooja mandap rituals",
    image: "/hindu-wedding-mandap-pooja.png",
    vidhan: [
      "Ganesh Pujan and Sankalp",
      "Kanyadaan and Mangal Phera",
      "Saptapadi and Sindoor Daan",
      "Aashirvad and Aarti",
    ],
    samagri: [
      "Kalash, Nariyal, Mauli",
      "Fruits, Flowers, Sweets",
      "Havan Samagri, Ghee",
      "Sindoor, Mangal Sutra (by family)",
    ],
    benefits: ["Blessed marital union", "Invokes divine grace for harmony", "Ensures auspicious beginning"],
  },
  {
    slug: "shradh",
    name: "Shradh Pooja",
    shortDescription: "Pitru tarpan and rituals to honor ancestors and seek blessings.",
    imageAlt: "Shradh pooja with tarpan",
    image: "/shradh-pooja-pitru-tarpan.png",
    vidhan: ["Sankalp and Pitru Tarpan", "Pind Daan as per vidhi", "Brahman Bhojan / Dan", "Aarti and Ashirwad"],
    samagri: [
      "Black sesame (Til), Kush grass",
      "Pind samagri (rice, barley, etc.)",
      "Fruits, Flowers",
      "Dakshina materials",
    ],
    benefits: [
      "Pleases ancestors (Pitru)",
      "Removes Pitru dosha and obstacles",
      "Brings peace and wellbeing to family",
    ],
  },
  {
    slug: "navgrah-shanti",
    name: "Navgrah Shanti",
    shortDescription: "Shanti and Havan to balance planetary influences and doshas.",
    imageAlt: "Navgrah Shanti yantras and kalash",
    image: "/navgrah-shanti-havan-yantra.png",
    vidhan: ["Sankalp and Ganesh Pujan", "Navgrah Pujan and Jap", "Havan and Purna Ahuti", "Aarti and Prasad"],
    samagri: ["Navdhanya, Navratna (if suggested)", "Havan Samagri, Ghee", "Fruits, Flowers", "Roli, Haldi, Chawal"],
    benefits: ["Balances planetary effects", "Mitigates doshas", "Supports success and health"],
  },
  {
    slug: "mundan",
    name: "Mundan Sanskar",
    shortDescription: "First hair ceremony performed with Vedic mantras for child’s wellbeing.",
    imageAlt: "Mundan ceremony with family",
    image: "/mundan-sanskar-ceremony.png",
    vidhan: ["Sankalp and Ganesh Pujan", "Mundan Sanskar as per vidhi", "Havan and Aarti", "Ashirvad"],
    samagri: ["Kalash, Mauli", "Havan Samagri, Ghee", "Fruits, Sweets", "New clothes for child"],
    benefits: ["Blesses the child’s growth and health", "Removes negative influences", "Auspicious new beginning"],
  },
  {
    slug: "annaprashan",
    name: "Annaprashan",
    shortDescription: "First solid food ceremony for infants as per Hindu tradition.",
    imageAlt: "Annaprashan pooja for baby",
    image: "/annaprashan-pooja-for-baby.png",
    vidhan: ["Sankalp and Ganesh Pujan", "Annaprashan sanskar", "Aarti and blessings", "Prasad distribution"],
    samagri: ["Kheer / Prasad items", "Fruits, Flowers", "Kalash items", "Mauli, Roli, Haldi, Chawal"],
    benefits: ["Blessings for child’s health", "Auspicious start to solid food", "Family prosperity and joy"],
  },
]

export function getAllServices(): Pooja[] {
  return SERVICES
}

export function getServiceBySlug(slug: string): Pooja | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
