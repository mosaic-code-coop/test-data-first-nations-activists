import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "elisa-loncon",
  fullName: "Elisa Loncón",
  dateOfBirth: new Date("1963-01-23T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Elisa Loncón served as President of Chile's Constitutional Convention, working to present an inclusive constitutional process that would have recognized Indigenous peoples' rights for the first time in Chilean history. This Mapuche linguist and educator has dedicated her career to defending Indigenous language rights and intercultural education, believing that Indigenous peoples can remain Indigenous while participating in plural societies. Loncón's leadership of the constitutional process demonstrated how Indigenous knowledge can guide national transformation. Though the new constitution was ultimately rejected, her work advanced national conversations about Indigenous rights and plurinational democracy.",
  email: "elisa.loncon@mapucheducation.test",
  phone: "+56-555-0178",
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Elisa_Loncon_Antileo.jpg",
  tags: ["Mapuche", "Constitutional-Convention", "Language-Rights", "Intercultural-Education", "Plurinational"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Elisa_Loncón",
  address: {
    street: "123 Test Street",
    city: "Santiago",
    state: "Santiago Metropolitan",
    country: "Chile",
    zipCode: "8320000",
  },
  quote:
    "Indigenous peoples can continue to be Indigenous with our languages and philosophy, exercising our rights in a plural society.",
  quoteReference: "https://en.wikipedia.org/wiki/Elisa_Loncón",
} satisfies Person;
