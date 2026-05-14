import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "autumn-peltier",
  fullName: "Autumn Peltier",
  dateOfBirth: new Date("2004-09-27T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Autumn Peltier has spent over a decade protecting the waters that sustain all life. An Anishinaabe water protector from Wikwemikong Unceded Territory, she began speaking out about water crises affecting Indigenous communities when she was eight years old. Following in the footsteps of her great-aunt Josephine Mandamin, a respected water walker, Peltier has addressed the United Nations General Assembly and other international forums about the sacred relationship between Indigenous peoples and water. Her advocacy has brought global attention to the water crises facing many First Nations communities across Canada.",
  email: "autumn.peltier@anishinabek.test",
  phone: "+1-555-0106",
  picture: null,
  tags: ["Water-Rights", "Youth-Activism", "Anishinaabe", "United-Nations"],
  groupMemberships: ["anishinabek-nation", "honor-the-earth"],
  reference: "https://en.wikipedia.org/wiki/Autumn_Peltier",
  address: {
    street: "777 Test Street",
    city: "Manitoulin Island",
    state: "Ontario",
    country: "Canada",
    zipCode: "P0P 1M0",
  },
  quote: "We can't eat money or drink oil. The future of our people depends on the protection of water.",
  quoteReference: "https://en.wikipedia.org/wiki/Autumn_Peltier",
} satisfies Person;
