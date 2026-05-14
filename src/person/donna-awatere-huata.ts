import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "donna-awatere-huata",
  fullName: "Donna Awatere Huata",
  dateOfBirth: new Date("1949-10-21T00:00:00.000Z"),
  pronouns: "she/her",
  bio: 'Donna Awatere Huata challenged both white feminists and Māori men to confront their own limitations, writing "Māori Sovereignty" in 1984 as a revolutionary text that demanded complete Indigenous self-determination. This Ngāti Whakaue activist and founding member of Ngā Tamatoa protested against the 1981 Springbok Tour and argued that racism was a more pressing issue than sexism for Māori women. Her journey from radical activism to parliamentary politics and eventual fraud conviction illustrates the complex paths that resistance can take. Awatere Huata proved that Indigenous women could challenge multiple systems of oppression simultaneously, even when those challenges came at personal cost.',
  email: "donna.awatere@maorisovereignty.test",
  phone: "+64-555-0144",
  picture: "https://upload.wikimedia.org/wikipedia/commons/1/17/Donna_Awatere_Huata.jpg",
  tags: ["Maori", "Feminist", "Ngati-Whakaue", "Sovereignty", "Activist"],
  groupMemberships: ["ngā-tamatoa", "maori-sovereignty-movement"],
  reference: "https://en.wikipedia.org/wiki/Donna_Awatere_Huata",
  address: {
    street: "321 Test Street",
    city: "Rotorua",
    state: "Bay of Plenty",
    country: "New Zealand",
    zipCode: "3010",
  },
  quote:
    "The time had come to honour Te Tiriti o Waitangi and restore the power of Māori to control their resources, lives and destinies.",
  quoteReference: "https://en.wikipedia.org/wiki/Donna_Awatere_Huata",
} satisfies Person;
