import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "shigeru-kayano",
  fullName: "Shigeru Kayano",
  dateOfBirth: new Date("1926-06-28T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Shigeru Kayano was a pioneering Ainu folklorist, activist, and former Diet member who opened the first Ainu language school in 1987, laying crucial groundwork for language revitalization efforts. As the first Ainu member of the Japanese Diet, he brought Indigenous voices to the national political stage and advocated for formal recognition of Ainu as Indigenous peoples. Kayano's lifework included documenting Ainu oral traditions, stories, and language at a time when the culture faced extinction. His recordings and writings preserved invaluable cultural knowledge while his political activism secured legal foundations for contemporary Ainu rights movements.",
  email: "memory.kayano@ainuheritage.test",
  phone: "+81-555-0170",
  picture: "https://upload.wikimedia.org/wikipedia/en/d/d9/Shigeru_Kayano.jpg",
  tags: ["Ainu", "Language-Preservation", "Politics", "Folklorist", "Diet-Member"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Shigeru_Kayano",
  address: {
    street: "234 Test Street",
    city: "Nibutani",
    state: "Hokkaido",
    country: "Japan",
    zipCode: "055-0101",
  },
  quote: "If we lose our language, we lose our soul. I will not let that happen to my people.",
  quoteReference: "https://en.wikipedia.org/wiki/Shigeru_Kayano",
} satisfies Person;
