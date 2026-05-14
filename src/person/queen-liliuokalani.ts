import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "queen-liliuokalani",
  fullName: "Queen Liliuokalani",
  dateOfBirth: new Date("1838-09-02T00:00:00.000Z"),
  pronouns: null,
  bio: "Queen Liliuokalani refused to accept that American businessmen could simply steal the Hawaiian Kingdom, fighting through courts, Congress, and international opinion to restore her people's sovereignty. As Hawaii's first and only reigning queen, she attempted to implement a new constitution that would restore power to Native Hawaiians after the so-called Bayonet Constitution had transferred control to foreign settlers. When a group of American businessmen overthrew her government in 1893, she chose to surrender rather than shed blood, then spent the rest of her life advocating for Hawaiian independence through legal and political channels. Liliuokalani composed over 160 songs including \"Aloha Oe\" while demonstrating that Indigenous monarchs could resist colonization through diplomacy, culture, and unwavering commitment to their people's future.",
  email: "liliuokalani@hawaiiankingdom.test",
  phone: "+1-808-555-0149",
  picture: "https://upload.wikimedia.org/wikipedia/commons/6/64/Liliuokalani%2C_c._1891.jpg",
  tags: ["Hawaiian", "Queen", "Sovereignty", "Musician", "Monarchy"],
  groupMemberships: ["hawaiian-kingdom", "hui-aloha-aina"],
  reference: "https://en.wikipedia.org/wiki/Liliuokalani",
  address: {
    street: "333 Test Street",
    city: "Honolulu",
    state: "Hawaii",
    country: "United States",
    zipCode: "96813",
  },
  quote: "Hawaii for the Hawaiians. The voice of the people is the voice of God.",
  quoteReference: "https://en.wikipedia.org/wiki/Liliuokalani",
} satisfies Person;
