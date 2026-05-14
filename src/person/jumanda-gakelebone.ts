import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "jumanda-gakelebone",
  fullName: "Jumanda Gakelebone",
  dateOfBirth: new Date("1950-08-12T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Jumanda Gakelebone advocates for San communities in Botswana's Central Kalahari Game Reserve, fighting against forced relocations that began in the 1990s. As a traditional leader of the Gana and Gwi San peoples, Gakelebone has challenged government claims that the relocations were voluntary, documenting how communities were cut off from water and basic services to force them to leave. His testimony in international courts helped establish that the relocations violated constitutional rights. Gakelebone continues to support San families who wish to return to their ancestral lands while maintaining their traditional hunting and gathering practices.",
  email: "jumanda.gakelebone@kalaharisurvival.test",
  phone: "+267-555-0163",
  picture: null,
  tags: ["San", "Kalahari", "Forced-Relocation", "Traditional-Leader", "Hunting-Gathering"],
  groupMemberships: [],
  address: {
    street: "890 Test Street",
    city: "Ghanzi",
    state: "Ghanzi District",
    country: "Botswana",
    zipCode: "11041",
  },
  quote: "The Kalahari is not empty land. It is our home, our church, our pharmacy, our everything.",
  quoteReference: "https://www.survivalinternational.org/tribes/bushmen",
} satisfies Person;
