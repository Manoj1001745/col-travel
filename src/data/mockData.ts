import type { Tour, Service, Stats } from "../types";

export const toursData: Tour[] = [
  {
    id: "1",
    title: "Thailand Paradise",
    country: "THAILAND",
    duration: "7 Days / 6 Nights",
    people: "2-15 people",
    rating: 4.8,
    reviews: 245,
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop",
    price: 899,
    highlights: [
      "Bangkok Grand Palace",
      "Phi Phi Islands",
      "Thai Street Food Tour",
    ],
    description:
      "Experience the beauty of Thailand with visits to cultural sites and tropical beaches.",
  },
  {
    id: "2",
    title: "Malaysia Discovery",
    country: "MALAYSIA",
    duration: "6 Days / 5 Nights",
    people: "2-12 people",
    rating: 4.7,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop",
    price: 749,
    highlights: ["Petronas Twin Towers", "Batu Caves", "Langkawi Island"],
    description:
      "Discover the diversity of Malaysia from modern cities to ancient caves.",
  },
  {
    id: "3",
    title: "Singapore Explorer",
    country: "SINGAPORE",
    duration: "5 Days / 4 Nights",
    people: "2-10 people",
    rating: 4.9,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop",
    price: 999,
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
    description:
      "Explore the futuristic city-state with world-class attractions and cuisine.",
  },
  {
    id: "4",
    title: "Bali Paradise",
    country: "INDONESIA",
    duration: "8 Days / 7 Nights",
    people: "2-12 people",
    rating: 4.8,
    reviews: 278,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    price: 849,
    highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Beach Resorts"],
    description:
      "Immerse yourself in the spiritual and natural beauty of Bali.",
  },
  {
    id: "5",
    title: "Bali Paradise",
    country: "INDONESIA",
    duration: "8 Days / 7 Nights",
    people: "2-12 people",
    rating: 4.8,
    reviews: 278,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    price: 849,
    highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Beach Resorts"],
    description:
      "Immerse yourself in the spiritual and natural beauty of Bali.",
  },

];

export const servicesData: Service[] = [
  {
    id: "1",
    title: "Airlines Tickets",
    description:
      "Get the best deals on domestic and international flights. We partner with major airlines to offer competitive prices.",
    icon: "✈️",
    features: [
      "Domestic & International Flights",
      "Best Price Guarantee",
      "24/7 Booking Support",
      "Instant Confirmation",
    ],
  },
  {
    id: "2",
    title: "Visa Services",
    description:
      "Expert visa assistance for 50+ countries. Fast processing and hassle-free documentation.",
    icon: "📋",
    features: [
      "50+ Countries",
      "Fast Processing",
      "Documentation Support",
      "Tracking Service",
    ],
    link: "/visa",
  },
  {
    id: "3",
    title: "Tour Packages",
    description:
      "Customized tour packages to popular destinations. Create unforgettable memories with our curated experiences.",
    icon: "🌍",
    features: [
      "Customizable Tours",
      "Expert Guides",
      "All-Inclusive Packages",
      "Group & Solo Options",
    ],
    link: "/tours",
  },
  {
    id: "4",
    title: "Hotel Booking",
    description:
      "Book hotels worldwide at the best rates. From budget to luxury, find your perfect stay.",
    icon: "🏨",
    features: [
      "Global Hotel Network",
      "Best Rate Guarantee",
      "No Hidden Charges",
      "Instant Confirmation",
    ],
  },
   {
    id: "5",
    title: "Hotel details",
    description:
      "Book hotels worldwide at the best rates. From budget to luxury, find your perfect stay.",
    icon: "🏨",
    features: [
      "Global Hotel Network",
      "Best Rate Guarantee",
      "No Hidden Charges",
      "Instant Confirmation",
    ],
  },
];

export const statsData: Stats = {
  experience: "15+ Years Experience",
  customers: "10K+ Happy Customers",
  destinations: "100+ Destinations",
  support: "24/7 Customer Support",
};

export const contactInfo = {
  address: "Travel Hub, Main Street, Your City",
  phone: ["+1-234-567-8900", "+1-234-567-8901"],
  whatsapp: "+1-234-567-8900",
  email: "info@coltravels.com",
};


