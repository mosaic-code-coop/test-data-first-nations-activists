import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "davi-kopenawa-yanomami",
  fullName: "Davi Kopenawa Yanomami",
  dateOfBirth: new Date("1956-01-01T00:00:00.000Z"),
  pronouns: "he/him",
  bio: 'Davi Kopenawa became the voice of the Amazon rainforest and its Indigenous peoples, translating the spiritual wisdom of Yanomami shamanism into warnings the modern world desperately needed to hear. This Yanomami leader and shaman founded the Hutukara Association to defend his people\'s territory from gold miners and cattle ranchers while arguing that Indigenous knowledge systems offer humanity\'s best hope for avoiding ecological collapse. His book "The Falling Sky" bridged two worlds, explaining to "white people" how their endless consumption threatens not just the Amazon but all life on Earth. Kopenawa proved that Indigenous voices carry essential wisdom for global survival, earning recognition as "Brazil\'s Dalai Lama of the Rainforest" for his tireless advocacy.',
  email: "davi.kopenawa@hutukara.test",
  phone: "+55-555-0151",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/5/54/Davi_Kopenawa_Yanomami_at_2024_Cannes_Film_Festival_for_The_Falling_Sky_%28cropped%29.jpg",
  tags: ["Yanomami", "Shaman", "Amazon", "Environmental", "Right-Livelihood"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Davi_Kopenawa_Yanomami",
  address: {
    street: "555 Test Street",
    city: "Watoriki",
    state: "Roraima",
    country: "Brazil",
    zipCode: "69343-000",
  },
  quote: "We need to think about the next seven generations and protect the forest for our children.",
  quoteReference: "https://en.wikipedia.org/wiki/Davi_Kopenawa_Yanomami",
} satisfies Person;
