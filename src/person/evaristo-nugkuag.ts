import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "evaristo-nugkuag",
  fullName: "Evaristo Nugkuag",
  dateOfBirth: new Date("1950-01-01T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Evaristo Nugkuag spent decades organizing Indigenous peoples across the Amazon basin to defend their territories from colonization and development. An Aguaruna leader from Peru, he founded the Interethnic Association for Rainforest Development to unite diverse Indigenous groups in protecting their lands. His work helped establish Indigenous territorial rights in Peruvian law and connected local struggles to international Indigenous rights movements. Nugkuag demonstrated how Indigenous organizing could transcend tribal boundaries while respecting cultural differences.",
  email: "evaristo.nugkuag@aidesep.test",
  phone: "+51-555-0202",
  picture: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Evaristo_Nugkuag%2C_2010_%28cropped%29.jpg",
  tags: ["Aguaruna", "Amazon", "Indigenous-Rights", "Peru", "Territorial-Defense"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Evaristo_Nugkuag",
  address: {
    street: "234 Test Street",
    city: "Lima",
    state: "Lima",
    country: "Peru",
    zipCode: "15001",
  },
  quote: "The forest is our life, our pharmacy, our supermarket. We cannot live without it.",
  quoteReference: "https://en.wikipedia.org/wiki/Evaristo_Nugkuag",
} satisfies Person;
