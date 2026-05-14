import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "sharice-davids",
  fullName: "Sharice Davids",
  dateOfBirth: new Date("1980-05-22T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Sharice Davids broke barriers both in the octagon and in Congress, bringing her diverse background to bear on policy issues affecting Indigenous communities. A Ho-Chunk attorney and former mixed martial arts fighter, she made history in 2018 by becoming one of the first Native American women elected to Congress, representing Kansas's third congressional district. Her path to Capitol Hill included time as a White House Fellow and work on economic development projects in Indian Country. In Congress, Davids has focused on infrastructure, healthcare, and economic issues while advocating for tribal sovereignty and Indigenous rights.",
  email: "sharice.davids@congress.test",
  phone: "+1-555-0112",
  picture: "https://upload.wikimedia.org/wikipedia/commons/8/81/Sharice_Davids.jpg",
  tags: ["Congress", "Ho-Chunk", "Politics", "Lawyer", "LGBTQ"],
  groupMemberships: ["us-congress-native-caucus"],
  reference: "https://en.wikipedia.org/wiki/Sharice_Davids",
  address: {
    street: "1313 Test Street",
    city: "Olathe",
    state: "Kansas",
    country: "United States",
    zipCode: "66061",
  },
  quote: "As a woman and a Native American, I know how to stand up and fight for equity.",
  quoteReference: "https://www.brainyquote.com/authors/sharice-davids-quotes",
} satisfies Person;
