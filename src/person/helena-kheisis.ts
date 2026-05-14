import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "helena-kheisis",
  fullName: "Helena !Kheisis",
  dateOfBirth: new Date("1960-12-03T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Helena !Kheisis is a Nama traditional healer and activist in Namibia who advocates for the protection of sacred sites and traditional medicine practices. She leads efforts to document traditional healing knowledge while fighting against mining operations that threaten sacred mountains and medicinal plant habitats. !Kheisis bridges traditional leadership roles with modern advocacy, serving on community conservancy boards that manage natural resources according to both traditional law and contemporary conservation science. Her work ensures that Nama cultural practices remain central to land management decisions in her region.",
  email: "helena.kheisis@namahealing.test",
  phone: "+264-555-0164",
  picture: null,
  tags: ["Nama", "Traditional-Healing", "Sacred-Sites", "Mining-Resistance", "Conservancy"],
  groupMemberships: [],
  address: {
    street: "321 Test Street",
    city: "Keetmanshoop",
    state: "Karas Region",
    country: "Namibia",
    zipCode: "10005",
  },
  quote: "The mountains hold our medicines and our ancestors. They cannot be replaced by mines.",
  quoteReference: "https://www.iwgia.org/en/namibia.html",
} satisfies Person;
