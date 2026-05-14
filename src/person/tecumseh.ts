import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "tecumseh",
  fullName: "Tecumseh",
  dateOfBirth: new Date("1768-03-01T00:00:00.000Z"),
  pronouns: null,
  bio: "Tecumseh worked to build a confederation of Indigenous nations that could collectively resist American expansion into the Ohio Valley and Great Lakes region in the early nineteenth century. A Shawnee leader and renowned orator, he traveled thousands of miles to unite disparate tribes around the principle that no single nation could sell land that belonged to all Indigenous peoples collectively. His alliance with the British during the War of 1812 represented the last significant military resistance to American expansion east of the Mississippi. Tecumseh's death at the Battle of the Thames in 1813 effectively ended the possibility of a unified Indigenous resistance in the eastern territories, leaving individual nations to face removal policies alone.",
  email: "tecumseh@shawnee.test",
  phone: "+1-555-0135",
  picture: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Tecumseh02.jpg",
  tags: ["Shawnee", "Confederacy", "Pan-Indian", "War-Of-1812"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Tecumseh",
  address: {
    street: "3535 Test Street",
    city: "Chillicothe",
    state: "Ohio",
    country: "United States",
    zipCode: "45601",
  },
  quote: "When you rise in the morning, give thanks for the light, for your life, for your strength.",
  quoteReference: "https://poemanalysis.com/chief-tecumseh/live-your-life/",
} satisfies Person;
