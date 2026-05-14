import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "russell-means",
  fullName: "Russell Means",
  dateOfBirth: new Date("1939-11-10T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Russell Means never separated his art from his activism. An Oglala Lakota leader and AIM co-founder, he fought for Indigenous rights through direct action and later brought authentic Native representation to Hollywood films, refusing to let either arena compromise his commitment to his people's sovereignty.",
  email: "russell.means@aim.test",
  phone: "+1-555-0103",
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/c6/RussellMeans1987.jpg",
  tags: ["Civil-Rights", "AIM", "Oglala-Lakota", "Wounded-Knee", "Actor"],
  groupMemberships: ["american-indian-movement"],
  reference: "https://en.wikipedia.org/wiki/Russell_Means",
  address: {
    street: "789 Test Street",
    city: "Porcupine",
    state: "South Dakota",
    country: "United States",
    zipCode: "57772",
  },
  quote: "The only way Indians will survive is by taking political power.",
  quoteReference: "https://www.brainyquote.com/authors/russell-means-quotes",
} satisfies Person;
