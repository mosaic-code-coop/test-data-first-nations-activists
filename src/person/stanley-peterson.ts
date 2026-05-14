import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "stanley-peterson",
  fullName: "Stanley Peterson",
  dateOfBirth: new Date("1970-04-22T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Stanley Peterson serves on the National Khoi & San Council and was a key negotiator in the historic Rooibos case that resulted in the world's first industry-wide benefit-sharing agreement between Indigenous peoples and a commercial industry. After nine years of negotiations and advocacy, this groundbreaking agreement established a precedent for Indigenous intellectual property rights related to traditional plant knowledge. Peterson's work demonstrates how persistent advocacy can transform centuries of exploitation into models of equitable partnership. His efforts have inspired similar benefit-sharing initiatives across Africa.",
  email: "stanley.peterson@khoisancouncil.test",
  phone: "+27-55-502-0158",
  picture: null,
  tags: ["San", "Traditional-Knowledge", "Benefit-Sharing", "Rooibos", "Intellectual-Property"],
  groupMemberships: [],
  address: {
    street: "234 Test Street",
    city: "Clanwilliam",
    state: "Western Cape",
    country: "South Africa",
    zipCode: "8135",
  },
  quote: "Traditional knowledge is not free for the taking. It belongs to our people and must benefit our communities.",
  quoteReference: "https://www.dailymaverick.co.za/article/2021-11-01-historic-rooibos-agreement/",
} satisfies Person;
