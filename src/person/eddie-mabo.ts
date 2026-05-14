import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "eddie-mabo",
  fullName: "Eddie Mabo",
  dateOfBirth: new Date("1936-06-29T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Eddie Mabo discovered that according to Australian law, his family had no legal claim to the land where generations of his ancestors were buried, sparking a legal challenge that would transform the continent. This Torres Strait Islander from Mer fought for ten years through the courts to prove that terra nullius—the fiction that Australia was uninhabited before British colonization—had no basis in law or justice. His case established that Native title existed across Australia, overturning two centuries of legal doctrine that denied Indigenous peoples' connection to country. Tragically, Mabo died months before his victory was announced, never seeing the landmark decision that bore his name and opened pathways for land rights claims across Australia.",
  email: "eddie.mabo@nativetitle.test",
  phone: "+61-555-0147",
  picture: "https://upload.wikimedia.org/wikipedia/en/a/ad/EddieMaboportrait.gif",
  tags: ["Torres-Strait-Islander", "Native-Title", "Land-Rights", "Mer-Island", "Legal-Victory"],
  groupMemberships: ["meriam-people", "native-title-claimants"],
  reference: "https://en.wikipedia.org/wiki/Eddie_Mabo",
  address: {
    street: "111 Test Street",
    city: "Murray Island",
    state: "Queensland",
    country: "Australia",
    zipCode: "4875",
  },
  quote: "This land has been ours for thousands of years. We just want recognition of that fact.",
  quoteReference: "https://en.wikipedia.org/wiki/Eddie_Mabo",
} satisfies Person;
