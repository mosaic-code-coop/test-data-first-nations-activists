import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "edward-loure",
  fullName: "Edward Loure",
  dateOfBirth: new Date("1968-03-15T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Edward Loure was awarded the Goldman Environmental Prize in 2016 for his innovative approach to community land titling that protected over 200,000 acres of Maasai land from conversion to hunting concessions and game parks. This Maasai leader developed a groundbreaking model that allows communities to receive legal title to their ancestral lands while maintaining traditional pastoralist practices. Loure's work has reduced the threat of forced eviction and urbanization for countless Maasai families. His approach has been replicated across East Africa, demonstrating how Indigenous-led conservation can protect both people and wildlife.",
  email: "edward.loure@maasailand.test",
  phone: "+255-555-0159",
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Edward_Loure.jpg",
  tags: ["Maasai", "Land-Titling", "Conservation", "Goldman-Prize", "Pastoralism"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Edward_Loure",
  address: {
    street: "456 Test Street",
    city: "Arusha",
    state: "Arusha Region",
    country: "Tanzania",
    zipCode: "23101",
  },
  quote: "Land is life. When you protect the land, you protect the people and the wildlife together.",
  quoteReference: "https://en.wikipedia.org/wiki/Edward_Loure",
} satisfies Person;
