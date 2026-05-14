import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "toroxa-breda",
  fullName: "Toroxa Breda",
  dateOfBirth: new Date("1965-04-18T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Toroxa Breda teaches Khoikhoi language in Supusupu and leads language revitalization efforts during the UN International Decade of Indigenous Languages. As one of the few fluent speakers of Khoikhoi dialects, Breda works tirelessly to document and teach the language to younger generations who were forbidden from speaking it during apartheid. Her work with the Supusupu Khoikhoi First Language Project represents a race against time to preserve linguistic diversity. Breda argues that language carries the soul of a people, and without it, cultural identity cannot survive.",
  email: "toroxa.breda@khoisanlanguage.test",
  phone: "+27-55-503-0162",
  picture: null,
  tags: ["Khoikhoi", "Language-Revitalization", "Supusupu", "Cultural-Identity", "Education"],
  groupMemberships: [],
  address: {
    street: "567 Test Street",
    city: "Upington",
    state: "Northern Cape",
    country: "South Africa",
    zipCode: "8800",
  },
  quote: "Language carries the soul of a people. When we lose our words, we lose ourselves.",
  quoteReference: "https://www.un.org/en/observances/decade-indigenous-languages",
} satisfies Person;
