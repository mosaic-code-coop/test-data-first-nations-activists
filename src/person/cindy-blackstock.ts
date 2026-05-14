import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "cindy-blackstock",
  fullName: "Cindy Blackstock",
  dateOfBirth: new Date("1964-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Cindy Blackstock has dedicated her career to protecting Indigenous children from systemic discrimination. A Gitxsan social worker and advocate, she challenged the Canadian government in court over underfunding of child welfare services on reserves, exposing decades of institutional neglect that violated Indigenous children's human rights.",
  email: "cindy.blackstock@fncaringsociety.test",
  phone: "+1-555-0104",
  picture: null,
  tags: ["Child-Welfare", "Human-Rights", "Gitxsan", "Social-Work"],
  groupMemberships: ["first-nations-caring-society"],
  reference: "https://en.wikipedia.org/wiki/Cindy_Blackstock",
  address: {
    street: "321 Test Street",
    city: "Ottawa",
    state: "Ontario",
    country: "Canada",
    zipCode: "K1P 6L1",
  },
  quote:
    "Every child is sacred and deserves the best that we can give them. When we prioritize their well-being, we honor our responsibilities as human beings.",
  quoteReference: "https://fncaringsociety.com/who-we-are",
} satisfies Person;
