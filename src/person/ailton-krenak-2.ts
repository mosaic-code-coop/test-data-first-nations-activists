import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ailton-krenak-2",
  fullName: "Ailton Krenak",
  dateOfBirth: new Date("1953-09-29T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Ailton Krenak is a Krenak indigenous leader, journalist, and philosopher from Brazil who advocates for Indigenous cosmovisions as alternatives to destructive development models. He gained national prominence during Brazil's constitutional assembly in the 1980s when he painted his face black to protest discrimination against Indigenous peoples. Krenak's writings and speeches challenge Western notions of progress and development, offering Indigenous perspectives on sustainability and human relationships with nature. His work influences environmental movements across Latin America and demonstrates how Indigenous philosophy can address global crises.",
  email: "ailton.krenak@indigenousphilosophy.test",
  phone: "+55-555-0180",
  picture: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ailton_Krenak_%285269420566%29_%28cropped%29.jpg",
  tags: ["Krenak", "Indigenous-Philosophy", "Constitutional-Assembly", "Environmental-Thought", "Brazil"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Ailton_Krenak",
  address: {
    street: "789 Test Street",
    city: "Resplendor",
    state: "Minas Gerais",
    country: "Brazil",
    zipCode: "35230-000",
  },
  quote: "We need to postpone the end of the world. Indigenous peoples know how to live without destroying life.",
  quoteReference: "https://en.wikipedia.org/wiki/Ailton_Krenak",
} satisfies Person;
