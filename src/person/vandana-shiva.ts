import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "vandana-shiva",
  fullName: "Vandana Shiva",
  dateOfBirth: new Date("1952-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Vandana Shiva fights against corporate control of agriculture and seeds that threatens Indigenous farming communities worldwide. An Indian scholar and activist, she established Navdanya to protect traditional seeds and farming practices from genetic engineering and corporate patents. Her work defending biodiversity connects directly with Indigenous rights, as traditional farmers and Indigenous peoples are the original guardians of genetic diversity. Shiva argues that seed freedom is fundamental to food sovereignty and cultural survival.",
  email: "vandana.shiva@navdanya.test",
  phone: "+91-555-0193",
  picture: "https://upload.wikimedia.org/wikipedia/commons/9/98/Dr._Vandana_Shiva_DS.jpg",
  tags: ["Seed-Sovereignty", "Biodiversity", "Agriculture", "India", "Environmental"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Vandana_Shiva",
  address: {
    street: "892 Test Street",
    city: "Dehradun",
    state: "Uttarakhand",
    country: "India",
    zipCode: "248001",
  },
  quote: "Seed is the source of life, and the first link in the food chain.",
  quoteReference: "https://www.brainyquote.com/authors/vandana-shiva-quotes",
} satisfies Person;
