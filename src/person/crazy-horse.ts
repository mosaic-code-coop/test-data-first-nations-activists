import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "crazy-horse",
  fullName: "Crazy Horse",
  dateOfBirth: new Date("1840-01-01T00:00:00.000Z"),
  pronouns: null,
  bio: "Crazy Horse was an Oglala Lakota war leader who fought to defend his people's territory from U.S. military invasion during the wars for the Black Hills. Known for his tactical brilliance and personal courage, he played a decisive role in the defeat of Custer at the Little Bighorn and continued to resist until 1877, when starvation and military pressure forced his band to surrender. He was killed later that year at Fort Robinson under disputed circumstances, bayoneted while allegedly resisting imprisonment. Crazy Horse never allowed his photograph to be taken and refused to sign any treaty, maintaining his resistance to the reservation system until his death at approximately thirty-seven years old.",
  email: "crazy.horse@oglala.test",
  phone: "+1-555-0134",
  picture: "https://upload.wikimedia.org/wikipedia/en/7/7b/Crazy_Horse_drawing.jpg",
  tags: ["Oglala-Lakota", "War-Leader", "Little-Bighorn", "Never-Surrender"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Crazy_Horse",
  address: {
    street: "3434 Test Street",
    city: "Pine Ridge",
    state: "South Dakota",
    country: "United States",
    zipCode: "57770",
  },
  quote: "One does not sell the earth upon which the people walk.",
  quoteReference: "https://www.goodreads.com/quotes/7442429-one-does-not-sell-the-earth-upon-which-the-people",
} satisfies Person;
