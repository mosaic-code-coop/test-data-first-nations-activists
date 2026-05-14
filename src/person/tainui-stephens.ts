import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "tainui-stephens",
  fullName: "Tainui Stephens",
  dateOfBirth: new Date("1952-08-15T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Tainui Stephens spent decades ensuring that Māori stories reached television screens and cinema audiences, refusing to let his people remain invisible in their own country. This Te Rarawa filmmaker and producer worked on groundbreaking programs from Koha to Waka Huia, creating a permanent space for Māori voices in New Zealand media. His documentaries about the New Zealand Wars and Māori Battalion brought Indigenous perspectives to national conversations about history and identity. Stephens understood that controlling the narrative was essential to cultural survival, making him a storyteller whose work preserved whakapapa for future generations.",
  email: "tainui.stephens@maorimedia.test",
  phone: "+64-555-0143",
  picture: null,
  tags: ["Maori", "Filmmaker", "Te-Rarawa", "Television", "Storyteller"],
  groupMemberships: ["maori-television-collective", "indigenous-filmmakers-aotearoa"],
  address: {
    street: "789 Test Street",
    city: "Auckland",
    state: "Auckland",
    country: "New Zealand",
    zipCode: "1010",
  },
  quote: "I prefer to call myself a storyteller who is fortunate to work in a fascinating and important industry.",
  quoteReference: "https://www.nzonscreen.com/person/tainui-stephens",
} satisfies Person;
