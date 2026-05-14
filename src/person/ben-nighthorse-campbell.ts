import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ben-nighthorse-campbell",
  fullName: "Ben Nighthorse Campbell",
  dateOfBirth: new Date("1933-04-13T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Ben Nighthorse Campbell broke barriers as the first Native American elected to the U.S. Senate in more than 60 years, serving Colorado from 1993 to 2005. A Northern Cheyenne member who grew up in poverty in California, Campbell's path to Capitol Hill was unconventional - he was an Olympic judo competitor in 1964, a jewelry designer, and a rancher before entering politics. In the Senate, he chaired the Indian Affairs Committee and worked on legislation affecting tribal sovereignty, cultural preservation, and veterans' affairs. Campbell's independent spirit led him to switch from Democrat to Republican in 1995, always prioritizing his constituents and Indigenous issues over party politics.",
  email: "ben.campbell@senate.test",
  phone: "+1-555-0123",
  picture: "https://upload.wikimedia.org/wikipedia/commons/7/75/BenNCampbell.jpg",
  tags: ["Northern-Cheyenne", "Senator", "Olympian", "Jewelry-Maker"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Ben_Nighthorse_Campbell",
  address: {
    street: "2424 Test Street",
    city: "Ignacio",
    state: "Colorado",
    country: "United States",
    zipCode: "81137",
  },
  quote: "I have always been prouder of my Indian heritage than anything else in my life.",
  quoteReference: "https://www.brainyquote.com/authors/ben-nighthorse-campbell-quotes",
} satisfies Person;
