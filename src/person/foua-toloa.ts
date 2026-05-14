import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "foua-toloa",
  fullName: "Foua Toloa",
  dateOfBirth: new Date("1962-01-20T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Foua Toloa is a Samoan traditional leader and environmental activist who advocates for the protection of customary marine tenure and traditional fishing practices in Samoa. She leads efforts to revive fa'a Samoa (the Samoan way) approaches to ocean conservation, demonstrating how traditional tapu (sacred restrictions) can be more effective than modern regulations in protecting marine ecosystems. Toloa's work shows how Indigenous governance systems can address contemporary environmental challenges while maintaining cultural integrity. Her advocacy has influenced Pacific regional policies on Indigenous rights and ocean conservation.",
  email: "foua.toloa@samoamarine.test",
  phone: "+685-555-0177",
  picture: "https://upload.wikimedia.org/wikipedia/commons/9/92/Foua_Toloa.jpg",
  tags: ["Samoan", "Marine-Conservation", "Customary-Tenure", "Faa-Samoa", "Traditional-Fishing"],
  groupMemberships: [],
  address: {
    street: "890 Test Street",
    city: "Apia",
    state: "Tuamasaga",
    country: "Samoa",
    zipCode: "10001",
  },
  quote: "The ocean is our ancestor. We do not own it, we belong to it.",
  quoteReference: "https://www.unep.org/news-and-stories/story/pacific-islands-front-lines-climate-change",
} satisfies Person;
