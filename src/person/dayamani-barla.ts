import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "dayamani-barla",
  fullName: "Dayamani Barla",
  dateOfBirth: new Date("1966-07-28T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Dayamani Barla is a fearless tribal journalist from Jharkhand who raised her voice against Arcelor Mittal's steel plant in Eastern Jharkhand, which tribal activists say would displace forty villages. She founded Jan Hak Patrika to highlight and amplify the voices of Adivasis, Dalits, and women who are often excluded from mainstream media coverage. Barla continues to fight for Jal, Jungle, Jamin (Water, Forest, Land) rights of Indigenous peoples while working as a journalist at Prabhat Khabar. Her dual role as journalist and activist ensures that Adivasi struggles receive the documentation and attention they deserve.",
  email: "dayamani.barla@janhakpatrika.test",
  phone: "+91-555-0166",
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Dayamani_Barla_in_ViBGYOR2012.jpg",
  tags: ["Adivasi", "Journalism", "Mining-Resistance", "Jharkhand", "Media-Activism"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Dayamani_Barla",
  address: {
    street: "789 Test Street",
    city: "Ranchi",
    state: "Jharkhand",
    country: "India",
    zipCode: "834001",
  },
  quote: "Our pen is our weapon. We will write the truth until the forests and our people are free.",
  quoteReference: "https://www.downtoearth.org.in/author/dayamani-barla-97",
} satisfies Person;
