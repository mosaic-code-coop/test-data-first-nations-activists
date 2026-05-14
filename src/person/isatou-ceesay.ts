import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "isatou-ceesay",
  fullName: "Isatou Ceesay",
  dateOfBirth: new Date("1972-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Isatou Ceesay transformed plastic waste into economic opportunity for women in rural Gambia. Known as the 'Queen of Recycling,' she organized women to collect and upcycle plastic bags that were polluting their communities and killing livestock. Her initiative not only cleaned up the environment but provided income for hundreds of women through handicraft production. Ceesay's approach demonstrates how environmental solutions can emerge from grassroots organizing and traditional knowledge systems.",
  email: "isatou.ceesay@womenrecycling.test",
  phone: "+220-555-0201",
  picture: null,
  tags: ["Recycling", "Women-Empowerment", "Gambia", "Environmental", "Waste-Management"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Isatou_Ceesay",
  address: {
    street: "789 Test Street",
    city: "Njau",
    state: "North Bank Region",
    country: "Gambia",
    zipCode: "NB001",
  },
  quote: "We cannot just talk about the environment. We have to act.",
  quoteReference: "https://en.wikipedia.org/wiki/Isatou_Ceesay",
} satisfies Person;
