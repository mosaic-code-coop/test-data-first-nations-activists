import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "mary-brave-bird",
  fullName: "Mary Brave Bird",
  dateOfBirth: new Date("1954-09-26T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Mary Brave Bird lived through one of the most intense moments of Native American resistance when she gave birth to her son during the 1973 occupation of Wounded Knee. A Lakota activist and member of AIM, she faced federal agents and military forces while bringing new life into a community under siege. Her experience became a powerful symbol of Indigenous women's strength and the continuation of Native life despite government attempts at suppression. Brave Bird later wrote about her experiences in powerful memoirs that documented both the brutality of government boarding schools and the fierce resistance of her generation.",
  email: "mary.bravebird@aim.test",
  phone: "+1-555-0110",
  picture: null,
  tags: ["Civil-Rights", "AIM", "Lakota", "Wounded-Knee", "Author"],
  groupMemberships: ["american-indian-movement"],
  reference: "https://en.wikipedia.org/wiki/Mary_Brave_Bird",
  address: {
    street: "1111 Test Street",
    city: "Mission",
    state: "South Dakota",
    country: "United States",
    zipCode: "57555",
  },
  quote:
    "I could not help noticing the great role women played in Pueblo society. Women owned the houses and actually built them.",
  quoteReference: "https://en.wikipedia.org/wiki/Mary_Brave_Bird",
} satisfies Person;
