import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "aili-keskitalo",
  fullName: "Aili Keskitalo",
  dateOfBirth: new Date("1968-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Aili Keskitalo serves as President of the Sami Parliament of Norway and has been a leading voice in Arctic Indigenous rights and reindeer herding protection. She has advocated against wind farm developments on traditional Sami lands, arguing that the green energy transition should not come at the expense of Indigenous peoples' rights. Keskitalo's leadership spans from local reindeer herding issues to international Arctic Council forums where she advocates for Indigenous perspectives on climate change and sustainable development. Her work demonstrates how traditional leaders can influence both national policies and international agreements.",
  email: "aili.keskitalo@samiparlament.test",
  phone: "+47-555-0184",
  picture: null,
  tags: ["Sami", "Parliament-President", "Reindeer-Herding", "Wind-Farms", "Arctic-Council"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Aili_Keskitalo",
  address: {
    street: "123 Test Street",
    city: "Karasjok",
    state: "Finnmark",
    country: "Norway",
    zipCode: "9730",
  },
  quote: "The green transition cannot be built on the destruction of Indigenous peoples' livelihoods and cultures.",
  quoteReference: "https://www.sametinget.no/",
} satisfies Person;
