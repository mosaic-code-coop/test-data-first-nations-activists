import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "dorothy-stang",
  fullName: "Dorothy Stang",
  dateOfBirth: new Date("1931-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Dorothy Stang, an American nun, dedicated her life to defending Amazon communities and forest protection in Brazil. Working with the Pastoral Land Commission, she supported small farmers and environmental defenders against logging and cattle ranching interests. Her advocacy for sustainable development and land reform made her a target of powerful agribusiness groups who saw her as an obstacle to profit. Stang was murdered in 2005 while walking to a community meeting, becoming a martyr for Amazon protection and social justice.",
  email: "dorothy.stang@cpt.test",
  phone: "+55-555-0200",
  picture: "https://upload.wikimedia.org/wikipedia/en/8/8d/Dorothy_Stang.jpg",
  tags: ["Amazon-Defender", "Nun", "Land-Reform", "Brazil", "Environmental-Martyr"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Dorothy_Stang",
  address: {
    street: "456 Test Street",
    city: "Anapu",
    state: "Pará",
    country: "Brazil",
    zipCode: "68365-000",
  },
  quote: "The death of the forest is the end of our life.",
  quoteReference: "https://en.wikipedia.org/wiki/Dorothy_Stang",
} satisfies Person;
