import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ovide-mercredi",
  fullName: "Ovide Mercredi",
  dateOfBirth: new Date("1946-01-30T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Ovide Mercredi transformed Indigenous political organizing in Canada during his tenure as National Chief of the Assembly of First Nations from 1991 to 1997. A Cree lawyer and political leader from Manitoba, he worked to build consensus among the diverse First Nations communities across Canada, representing over 630 bands with different languages, cultures, and political priorities. Mercredi played a crucial role in constitutional negotiations during the early 1990s, advocating for Indigenous self-government and the recognition of inherent Aboriginal rights. His leadership helped establish the Assembly of First Nations as a more unified and effective political voice for Indigenous peoples in their relationship with the Canadian government.",
  email: "ovide.mercredi@afn.test",
  phone: "+1-555-0114",
  picture: "https://upload.wikimedia.org/wikipedia/commons/8/86/Ovide_Mercredi.JPG",
  tags: ["Politics", "Cree", "Assembly-First-Nations", "Grand-Chief"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Ovide_Mercredi",
  address: {
    street: "1515 Test Street",
    city: "Winnipeg",
    state: "Manitoba",
    country: "Canada",
    zipCode: "R3B 0T6",
  },
  quote: "We want to be partners in this country, not wards of the state.",
  quoteReference: "https://en.wikipedia.org/wiki/Ovide_Mercredi",
} satisfies Person;
