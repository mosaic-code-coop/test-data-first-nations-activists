import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "lars-anders-baer-2",
  fullName: "Lars-Anders Baer",
  dateOfBirth: new Date("1955-03-12T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Lars-Anders Baer is a Sami reindeer herder and activist from Sweden who has challenged mining operations and forestry practices that threaten traditional grazing lands. He represents the Sirges Sami village in legal battles against the state and private companies over land use rights that affect seasonal reindeer migration routes. Baer's activism combines traditional ecological knowledge with legal advocacy, documenting how industrial development disrupts reindeer behavior and Sami livelihoods. His work highlights the ongoing colonization of Sami territories through resource extraction and the need for effective Indigenous consent mechanisms.",
  email: "lars.baer@sirgessami.test",
  phone: "+46-555-0185",
  picture: null,
  tags: ["Sami", "Reindeer-Herding", "Mining-Resistance", "Forestry", "Sweden"],
  groupMemberships: [],
  address: {
    street: "456 Test Street",
    city: "Gällivare",
    state: "Norrbotten",
    country: "Sweden",
    zipCode: "982 31",
  },
  quote:
    "The reindeer know these paths for thousands of years. We cannot let machines destroy what our ancestors built.",
  quoteReference: "https://www.iwgia.org/en/sweden.html",
} satisfies Person;
