import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ruth-liloqula",
  fullName: "Ruth Liloqula",
  dateOfBirth: new Date("1958-04-07T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Ruth Liloqula advocates for Indigenous women's rights and traditional governance systems in the Solomon Islands, where customary land tenure covers over 87% of the country. She works with rural communities to strengthen traditional decision-making processes while ensuring women's voices are heard in land and resource management. Liloqula's approach recognizes that Indigenous governance systems can adapt to contemporary challenges while maintaining their cultural integrity. Her work demonstrates how traditional leaders can address modern issues like logging, mining, and climate change through Indigenous knowledge systems.",
  email: "ruth.liloqula@solomonwomen.test",
  phone: "+677-555-0173",
  picture: null,
  tags: ["Melanesian", "Women-Rights", "Customary-Land", "Traditional-Governance", "Solomon-Islands"],
  groupMemberships: [],
  address: {
    street: "456 Test Street",
    city: "Honiara",
    state: "Guadalcanal Province",
    country: "Solomon Islands",
    zipCode: "10001",
  },
  quote: "Our custom is not backward. It is wisdom that has sustained us for thousands of years.",
  quoteReference: "https://www.pacificwomen.org/our-stories",
} satisfies Person;
