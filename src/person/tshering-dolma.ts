import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "tshering-dolma",
  fullName: "Tshering Dolma",
  dateOfBirth: new Date("1985-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Tshering Dolma is a Tibetan environmental activist and traditional medicine practitioner who advocates for the protection of high-altitude ecosystems and traditional Tibetan healing practices. She works with nomadic communities to document climate change impacts on traditional grazing patterns and medicinal plant availability. Dolma's activism combines environmental science with traditional ecological knowledge, demonstrating how Indigenous knowledge can inform climate adaptation strategies. Her work bridges Tibetan Buddhist concepts of environmental stewardship with contemporary conservation efforts, showing how spiritual traditions can guide environmental activism.",
  email: "tshering.dolma@tibetanhealing.test",
  phone: "+91-555-0189",
  picture: null,
  tags: ["Tibetan", "Traditional-Medicine", "High-Altitude-Ecosystems", "Climate-Adaptation", "Nomadic-Communities"],
  groupMemberships: [],
  address: {
    street: "890 Test Street",
    city: "Dharamshala",
    state: "Himachal Pradesh",
    country: "India",
    zipCode: "176215",
  },
  quote:
    "The mountains teach us patience and resilience. We must learn from them to heal our relationship with nature.",
  quoteReference: "https://www.tibetpolicy.net/environment/",
} satisfies Person;
