import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "kaori-tahara",
  fullName: "Kaori Tahara",
  dateOfBirth: new Date("1978-09-14T00:00:00.000Z"),
  pronouns: "she/her",
  bio: 'Kaori Tahara is an Ainu rights activist and educator who teaches Ainu history at Tokyo University, highlighting the ongoing challenges faced by the Ainu community despite recent government recognition. She emphasizes how "Ainu people were officially forbidden to speak their language and were forced to take Japanese names," and documents how discrimination persists today. Tahara\'s academic work provides crucial documentation of Ainu experiences while her activism pushes for meaningful implementation of Indigenous rights. Her dual role as scholar and advocate ensures that Ainu voices remain central to discussions of Japanese Indigenous rights.',
  email: "kaori.tahara@ainustudies.test",
  phone: "+81-555-0169",
  picture: null,
  tags: ["Ainu", "Academic-Activism", "Language-Rights", "Discrimination", "Tokyo"],
  groupMemberships: [],
  address: {
    street: "890 Test Street",
    city: "Tokyo",
    state: "Tokyo",
    country: "Japan",
    zipCode: "113-0033",
  },
  quote: "Recognition without action is empty. We need real change, not just symbolic gestures.",
  quoteReference: "https://www.culturalsurvival.org/news/ainu-people-japan",
} satisfies Person;
