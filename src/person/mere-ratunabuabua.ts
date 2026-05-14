import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "mere-ratunabuabua",
  fullName: "Mere Ratunabuabua",
  dateOfBirth: new Date("1955-08-30T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Mere Ratunabuabua advocates for Indigenous Fijian women's rights and traditional ecological knowledge in climate adaptation strategies. She works with rural communities to document and preserve traditional farming and fishing practices that have sustained Pacific Island communities for generations. Ratunabuabua's advocacy emphasizes how Indigenous women hold critical knowledge for climate resilience but are often excluded from formal climate planning processes. Her work bridges traditional iTaukei governance systems with contemporary environmental policy, ensuring that climate solutions honor Indigenous knowledge and practices.",
  email: "mere.ratunabuabua@fijiwomen.test",
  phone: "+679-555-0176",
  picture: null,
  tags: ["Fijian", "Traditional-Knowledge", "Climate-Adaptation", "Women-Rights", "Itaukei"],
  groupMemberships: [],
  address: {
    street: "567 Test Street",
    city: "Suva",
    state: "Central Division",
    country: "Fiji",
    zipCode: "10001",
  },
  quote:
    "Our grandmothers knew how to read the sea and sky. We must honor this knowledge in our fight against climate change.",
  quoteReference: "https://www.pacificclimatewarriors.org/",
} satisfies Person;
