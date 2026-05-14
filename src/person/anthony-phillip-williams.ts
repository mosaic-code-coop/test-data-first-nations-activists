import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "anthony-phillip-williams",
  fullName: "Anthony Phillip Williams",
  dateOfBirth: new Date("1965-07-08T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Anthony Phillip Williams serves as the national coordinator of the Khoisan Liberation and Mass Movement in South Africa. He left his career as a pastor and business consultant to become a full-time activist for Khoikhoi land rights and cultural preservation. Williams argues that land is a prerequisite for cultural identity, asking 'How can our culture survive if we have no place where to practice it?' His work focuses on securing recognition of the Khoikhoi as South Africa's First Nations and addressing the ongoing legacy of colonial dispossession.",
  email: "anthony.williams@khoisanliberation.test",
  phone: "+27-55-501-0157",
  picture: null,
  tags: ["Khoikhoi", "Land-Rights", "Cultural-Preservation", "South-Africa", "First-Nations"],
  groupMemberships: [],
  address: {
    street: "789 Test Street",
    city: "Cape Town",
    state: "Western Cape",
    country: "South Africa",
    zipCode: "8001",
  },
  quote:
    "How can our culture survive if we have no place where to practice it? Land is a prerequisite for cultural identity.",
  quoteReference: "https://mg.co.za/article/2022-06-24-khoisan-land-rights-activist/",
} satisfies Person;
