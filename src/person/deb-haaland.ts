import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "deb-haaland",
  fullName: "Deb Haaland",
  dateOfBirth: new Date("1960-12-02T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Deb Haaland made history in 2021 when she became the first Native American to serve as a Cabinet Secretary, taking the helm of the Department of the Interior. A Laguna Pueblo citizen who previously represented New Mexico in Congress, she now oversees the federal agency responsible for managing public lands, national parks, and the government's trust responsibilities to tribal nations. Her appointment brought Indigenous perspectives to decisions affecting millions of acres of ancestral territories, though the systemic challenges facing Native communities require far more than symbolic firsts to address.",
  email: "deb.haaland@interior.test",
  phone: "+1-555-0117",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Deb_Haaland%2C_official_portrait%2C_116th_Congress_%28cropped%29.jpg",
  tags: ["Congress", "Laguna-Pueblo", "Cabinet", "Interior-Secretary", "Politician"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Deb_Haaland",
  address: {
    street: "1818 Test Street",
    city: "Albuquerque",
    state: "New Mexico",
    country: "United States",
    zipCode: "87102",
  },
  quote:
    "A voice was needed to ensure that this country's first peoples have a seat at the table when decisions are being made about our lands, our waters, our sacred sites and our people.",
  quoteReference: "https://www.brainyquote.com/authors/deb-haaland-quotes",
} satisfies Person;
