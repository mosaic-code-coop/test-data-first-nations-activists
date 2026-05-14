import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "dismas-partalala",
  fullName: "Dismas Partalala",
  dateOfBirth: new Date("1962-11-25T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Dismas Partalala is a Maasai grassroots conservationist based in the Loliondo district of Tanzania who has spent over two decades securing land rights for the Hadzabe community, one of the last remaining hunter-gatherer peoples in Africa. His work protects the Yaeda Valley forests where the Hadzabe have lived sustainably for centuries, depending on plants for food and medicine near the Ngorongoro Crater. Partalala's advocacy bridges traditional Maasai pastoralism and Hadzabe hunting-gathering practices, demonstrating how different Indigenous groups can support each other. His efforts preserve not only land but entire ways of life that represent humanity's oldest relationships with the natural world.",
  email: "dismas.partalala@loliondo.test",
  phone: "+255-555-0161",
  picture: null,
  tags: ["Maasai", "Hadzabe-Support", "Hunter-Gatherer", "Yaeda-Valley", "Traditional-Conservation"],
  groupMemberships: [],
  address: {
    street: "789 Test Street",
    city: "Loliondo",
    state: "Arusha Region",
    country: "Tanzania",
    zipCode: "23201",
  },
  quote: "The Hadzabe are our neighbors and teachers. Their ancient wisdom must be protected for all humanity.",
  quoteReference: "https://www.carbontan.com/about",
} satisfies Person;
