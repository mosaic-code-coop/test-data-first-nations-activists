import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ocean-wave-torres",
  fullName: "Ocean Wave Torres",
  dateOfBirth: new Date("1985-03-15T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Ocean Wave Torres has dedicated her life to protecting the marine ecosystems that sustain her people. A Torres Strait Islander marine conservation advocate, she works to safeguard coral reefs and traditional fishing grounds from the devastating impacts of climate change. Her advocacy bridges Indigenous knowledge systems with modern conservation science, demonstrating that traditional ecological wisdom is essential for environmental protection. Torres fights tirelessly to ensure that rising sea levels and ocean acidification do not destroy the islands and waters that have sustained her ancestors for thousands of years.",
  email: "ocean.wave@torresstraitmarine.test",
  phone: "+61-555-0108",
  picture: null,
  tags: ["Marine-Conservation", "Coral-Reefs", "Torres-Strait-Islander", "Fishing-Rights", "Australian"],
  groupMemberships: ["torres-strait-conservation", "pacific-islander-alliance"],
} satisfies Person;
