import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "chico-mendes",
  fullName: "Chico Mendes",
  dateOfBirth: new Date("1944-01-01T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Chico Mendes gave his life defending the Amazon rainforest and the rubber tappers who depended on it for survival. A Brazilian environmental activist and union leader, he organized rubber tappers to resist cattle ranchers and developers who were destroying their forest-based livelihoods. His work built bridges between environmentalists and Indigenous communities, recognizing that forest protection required supporting the people who lived there sustainably. Mendes was assassinated in 1988, but his legacy continues to inspire forest defenders worldwide.",
  email: "chico.mendes@rubbertappers.test",
  phone: "+55-555-0195",
  picture: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Chico_Mendes_in_1988.jpg",
  tags: ["Amazon", "Environmental", "Rubber-Tappers", "Brazil", "Forest-Protection"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Chico_Mendes",
  address: {
    street: "789 Test Street",
    city: "Xapuri",
    state: "Acre",
    country: "Brazil",
    zipCode: "69930-000",
  },
  quote:
    "At first I thought I was fighting to save rubber trees, then I thought I was fighting to save the Amazon rainforest. Now I realize I was fighting for humanity.",
  quoteReference: "https://www.brainyquote.com/authors/chico-mendes-quotes",
} satisfies Person;
