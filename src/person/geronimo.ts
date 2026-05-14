import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "geronimo",
  fullName: "Geronimo",
  dateOfBirth: new Date("1829-06-16T00:00:00.000Z"),
  pronouns: null,
  bio: "Geronimo led Chiricahua Apache resistance against both Mexican and American forces for over two decades, becoming the last Indigenous leader to formally surrender to the United States in 1886. A medicine man and war leader, he fought to avenge the murder of his family by Mexican soldiers and later to resist the forced relocation of his people to the San Carlos Reservation. His small band of fighters repeatedly escaped from reservations and evaded thousands of troops, using knowledge of the harsh desert terrain that their pursuers lacked. Geronimo spent his final twenty-three years as a prisoner of war, never permitted to return to his homeland, dying at Fort Sill in 1909 while still technically a captive.",
  email: "geronimo@apache.test",
  phone: "+1-555-0136",
  picture: "https://upload.wikimedia.org/wikipedia/commons/5/54/GeronimoRinehart.jpg",
  tags: ["Apache", "Medicine-Man", "Warrior", "Last-Resistance"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Geronimo",
  address: {
    street: "3636 Test Street",
    city: "Fort Sill",
    state: "Oklahoma",
    country: "United States",
    zipCode: "73503",
  },
  quote: "I cannot think that we are useless or God would not have created us.",
  quoteReference: "https://en.wikiquote.org/wiki/Geronimo",
} satisfies Person;
