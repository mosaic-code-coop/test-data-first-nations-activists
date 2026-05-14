import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "suzan-shown-harjo",
  fullName: "Suzan Shown Harjo",
  dateOfBirth: new Date("1945-06-02T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Suzan Shown Harjo has dedicated her career to protecting Indigenous cultural heritage and advancing tribal sovereignty through policy and legal advocacy. A Cheyenne and Hodulgee Muscogee activist, writer, and curator, she played pivotal roles in the passage of landmark legislation including the American Indian Religious Freedom Act and the Native American Graves Protection and Repatriation Act. Her work has focused on returning sacred items and ancestral remains to tribal communities, challenging racist sports mascots, and advocating for the protection of sacred sites. Harjo has served in various government positions and continues to write and speak about Indigenous rights and cultural preservation.",
  email: "suzan.harjo@nmai.test",
  phone: "+1-555-0115",
  picture: "https://upload.wikimedia.org/wikipedia/commons/6/62/Suzan_shown_harjo_09.jpg",
  tags: ["Policy", "Cheyenne", "Muscogee", "Repatriation"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Suzan_Shown_Harjo",
  address: {
    street: "1616 Test Street",
    city: "Washington",
    state: "District of Columbia",
    country: "United States",
    zipCode: "20002",
  },
  quote: "Our ancestors are not artifacts. They are human beings who deserve to rest in peace.",
  quoteReference: "https://en.wikipedia.org/wiki/Suzan_Shown_Harjo",
} satisfies Person;
