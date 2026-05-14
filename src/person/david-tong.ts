import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "david-tong",
  fullName: "David Tong",
  dateOfBirth: new Date("1972-11-11T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "David Tong is a climate activist and traditional leader from Kiribati who advocates for the rights of climate refugees and the preservation of Pacific Island cultures threatened by sea level rise. As his nation faces the possibility of becoming uninhabitable due to climate change, Tong works to ensure that I-Kiribati people maintain their cultural identity and rights even if forced to relocate. His advocacy combines traditional navigation knowledge with modern climate science to document environmental changes. Tong's work highlights how climate change represents cultural genocide for Pacific Island peoples.",
  email: "david.tong@kiribaticlimate.test",
  phone: "+686-555-0174",
  picture: null,
  tags: ["I-Kiribati", "Climate-Refugee", "Sea-Level-Rise", "Cultural-Preservation", "Navigation"],
  groupMemberships: [],
  address: {
    street: "789 Test Street",
    city: "South Tarawa",
    state: "Gilbert Islands",
    country: "Kiribati",
    zipCode: "0001",
  },
  quote:
    "When our islands disappear beneath the waves, where will our ancestors rest? This is not just climate change - it is cultural extinction.",
  quoteReference: "https://www.climatechangenews.com/tag/kiribati/",
} satisfies Person;
