import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "leslie-marmon-silko",
  fullName: "Leslie Marmon Silko",
  dateOfBirth: new Date("1948-03-05T00:00:00.000Z"),
  pronouns: "she/her",
  bio: 'Leslie Marmon Silko transformed American literature through her innovative blend of Laguna Pueblo oral traditions and contemporary narrative techniques. Growing up at Laguna Pueblo in New Mexico, she learned traditional stories from her grandmother and aunts, which profoundly influenced her writing. Her 1977 novel "Ceremony" became a landmark work in Native American literature, exploring themes of trauma, healing, and cultural continuity through the story of a World War II veteran returning to the reservation. Silko\'s poetry and fiction have challenged literary conventions while preserving and revitalizing Indigenous storytelling traditions for new generations.',
  email: "leslie.silko@laguna.test",
  phone: "+1-555-0126",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/7/77/Headliner_Leslie_Marmon_Silko_at_the_banquet_reading_%286233509362%29_%28cropped%29.jpg",
  tags: ["Laguna-Pueblo", "Author", "Storyteller", "Ceremony"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Leslie_Marmon_Silko",
  address: {
    street: "2626 Test Street",
    city: "Laguna",
    state: "New Mexico",
    country: "United States",
    zipCode: "87026",
  },
  quote: "You don't have anything if you don't have the stories.",
  quoteReference: "https://en.wikipedia.org/wiki/Leslie_Marmon_Silko",
} satisfies Person;
