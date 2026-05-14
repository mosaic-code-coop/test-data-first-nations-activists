import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "hindou-oumarou-ibrahim",
  fullName: "Hindou Oumarou Ibrahim",
  dateOfBirth: new Date("1984-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Hindou Oumarou Ibrahim is a Mbororo pastoralist and climate activist from Chad who advocates for Indigenous peoples' role in climate change adaptation and environmental conservation. She serves on the UN Sustainable Development Solutions Network and uses traditional weather forecasting knowledge to develop climate adaptation strategies. Ibrahim's work demonstrates how nomadic pastoralist knowledge can inform drought early warning systems and sustainable land management. Her advocacy bridges traditional governance systems with international climate policy, ensuring Indigenous voices shape global environmental agreements.",
  email: "hindou.ibrahim@mbororo.test",
  phone: "+235-555-0190",
  picture: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Hindou_Oumarou_Ibrahim.jpg",
  tags: ["Mbororo", "Pastoralist", "Climate-Adaptation", "Traditional-Forecasting", "Chad"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Hindou_Oumarou_Ibrahim",
  address: {
    street: "123 Test Street",
    city: "N'Djamena",
    state: "N'Djamena",
    country: "Chad",
    zipCode: "1001",
  },
  quote: "Traditional knowledge is not primitive. It is sophisticated science developed over thousands of years.",
  quoteReference: "https://en.wikipedia.org/wiki/Hindou_Oumarou_Ibrahim",
} satisfies Person;
