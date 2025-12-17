export interface Tour {
  id: string;
  title: string;
  country: string;
  duration: string;
  people: string;
  rating: number;
  reviews: number;
  image: string;
  price: number;
  highlights: string[];
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  link?: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  tourCount: number;
}

export interface ContactInfo {
  address: string;
  phone: string[];
  whatsapp: string;
  email: string;
}

export interface FlightSearch {
  tripType: "oneWay" | "roundTrip";
  nationality: string;
  from: string;
  to: string;
  departure: string;
  return?: string;
  passengers: number;
}

export interface Stats {
  experience: string;
  customers: string;
  destinations: string;
  support: string;
}
