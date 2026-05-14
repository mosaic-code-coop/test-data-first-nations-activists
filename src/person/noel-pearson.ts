import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "noel-pearson",
  fullName: "Noel Pearson",
  dateOfBirth: new Date("1965-06-25T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Noel Pearson has never accepted that Aboriginal people should remain trapped in cycles of welfare dependency. A Cape York leader and constitutional lawyer, he advocates for Indigenous economic empowerment and educational reform, arguing that true reconciliation requires Aboriginal people to reclaim agency over their own communities.",
  email: "noel.pearson@capeyork.test",
  phone: "+61-555-0107",
  picture: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Noel_Pearson_8Feb10.jpg",
  tags: ["Land-Rights", "Education", "Constitutional-Recognition"],
  groupMemberships: ["cape-york-partnership"],
  reference: "https://en.wikipedia.org/wiki/Noel_Pearson",
  address: {
    street: "888 Test Street",
    city: "Cooktown",
    state: "Queensland",
    country: "Australia",
    zipCode: "4895",
  },
  quote:
    "We have to take responsibility for our own future. We cannot continue to blame everyone else for our problems.",
  quoteReference: "https://en.wikipedia.org/wiki/Noel_Pearson",
} satisfies Person;
