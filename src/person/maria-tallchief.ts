import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "maria-tallchief",
  fullName: "Maria Tallchief",
  dateOfBirth: new Date("1925-01-24T00:00:00.000Z"),
  pronouns: "she/her",
  bio: 'Maria Tallchief revolutionized American ballet as the first major prima ballerina of Native American descent, performing on the world\'s most prestigious stages. Born Elizabeth Marie Tall Chief on the Osage reservation in Oklahoma, she began dancing as a child and later moved to New York to pursue her career. As the principal dancer for the New York City Ballet under George Balanchine, she helped establish the company\'s international reputation through her performances in ballets like "Firebird" and "Swan Lake." Tallchief\'s artistry and technical brilliance opened doors for other Native American dancers while challenging stereotypes about Indigenous people in classical arts.',
  email: "maria.tallchief@ballet.test",
  phone: "+1-555-0128",
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Maria_Tallchief_1961.png",
  tags: ["Osage", "Ballet", "Prima-Ballerina", "Dance"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Maria_Tallchief",
  address: {
    street: "2828 Test Street",
    city: "New York",
    state: "New York",
    country: "United States",
    zipCode: "10023",
  },
  quote:
    "The important thing is dancing, and before it withers away from my body, I will keep dancing till the last moment.",
  quoteReference: "https://en.wikipedia.org/wiki/Maria_Tallchief",
} satisfies Person;
