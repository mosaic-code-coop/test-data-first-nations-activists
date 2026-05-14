import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "sarah-winnemucca",
  fullName: "Sarah Winnemucca",
  dateOfBirth: new Date("1844-01-01T00:00:00.000Z"),
  pronouns: null,
  bio: "Sarah Winnemucca navigated impossible circumstances as a Northern Paiute interpreter, scout, and advocate during the violent decades of western expansion. Her 1883 autobiography, 'Life Among the Piutes,' documented the broken promises and brutal treatment her people suffered at the hands of Indian agents and settlers, making her one of the first Native American women to publish a book in English. She traveled across the country giving hundreds of lectures to raise awareness about conditions on reservations and petition for Paiute land rights, though the legislation she helped secure was never properly implemented. Winnemucca's efforts to work within the system while it destroyed her people's way of life illustrate the painful compromises Indigenous leaders faced during this period.",
  email: "sarah.winnemucca@paiute.test",
  phone: "+1-555-0132",
  picture: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Sarah_Winnemucca.jpg",
  tags: ["Northern-Paiute", "Interpreter", "Author", "Peace-Advocate"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Sarah_Winnemucca",
  address: {
    street: "3232 Test Street",
    city: "Nixon",
    state: "Nevada",
    country: "United States",
    zipCode: "89424",
  },
  quote: "If women could go into your Congress, I think justice would soon be done to the Indians.",
  quoteReference: "https://en.wikipedia.org/wiki/Sarah_Winnemucca",
} satisfies Person;
