import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "betiana-colhuan",
  fullName: "Betiana Colhuan",
  dateOfBirth: new Date("1980-07-15T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Betiana Colhuan is a Mapuche leader leading efforts to reclaim national park land considered sacred to her people, including areas that hold deep spiritual significance for traditional healing practices. Since childhood, she was trained by Mapuche elders to become a machi, a spiritual leader and healer, becoming the first to earn this title on the Argentinian side of the Andes Mountains in nearly 100 years. Colhuan's work bridges spiritual leadership with land rights activism, arguing that sacred sites are essential for maintaining Indigenous cultural and healing practices. Her efforts demonstrate how traditional authority can guide contemporary struggles for territorial sovereignty.",
  email: "betiana.colhuan@machimapuche.test",
  phone: "+54-555-0179",
  picture: null,
  tags: ["Mapuche", "Machi", "Sacred-Sites", "Traditional-Healing", "Argentina"],
  groupMemberships: [],
  address: {
    street: "456 Test Street",
    city: "San Carlos de Bariloche",
    state: "Río Negro",
    country: "Argentina",
    zipCode: "8400",
  },
  quote: "These mountains are not just landscape. They are our pharmacy, our university, our temple.",
  quoteReference: "https://www.theguardian.com/environment/2020/oct/16/mapuche-spiritual-leader-patagonia-land-rights",
} satisfies Person;
