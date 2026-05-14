import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "galina-diatchkova",
  fullName: "Galina Diatchkova",
  dateOfBirth: new Date("1968-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Galina Diatchkova is an Even traditional healer and cultural preservation activist from the Sakha Republic who advocates for the protection of sacred sites and traditional medicine practices threatened by gold mining operations. She leads efforts to document traditional healing knowledge while challenging Russian federal policies that undermine Indigenous land rights. Diatchkova's work demonstrates how Indigenous women maintain cultural continuity in the face of state assimilation policies and industrial development. Her advocacy bridges traditional authority structures with contemporary human rights frameworks, working within Russia's constraints to protect Indigenous knowledge systems.",
  email: "galina.diatchkova@evenhealing.test",
  phone: "+7-555-0188",
  picture: null,
  tags: ["Even", "Traditional-Healing", "Sacred-Sites", "Mining-Resistance", "Sakha-Republic"],
  groupMemberships: [],
  address: {
    street: "567 Test Street",
    city: "Yakutsk",
    state: "Sakha Republic",
    country: "Russia",
    zipCode: "677000",
  },
  quote:
    "Our medicines come from the land our ancestors knew. When they destroy the forest, they destroy our pharmacy.",
  quoteReference: "https://www.culturalsurvival.org/publications/cultural-survival-quarterly/even-peoples-siberia",
} satisfies Person;
