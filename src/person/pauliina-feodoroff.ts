import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "pauliina-feodoroff",
  fullName: "Pauliina Feodoroff",
  dateOfBirth: new Date("1973-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Pauliina Feodoroff is a Skolt Sami documentary filmmaker and cultural activist from Finland who documents traditional knowledge and advocates for Sami language preservation. Her films capture the lived experiences of Sami communities facing cultural assimilation and environmental threats to traditional livelihoods. Feodoroff's work bridges art and activism, using storytelling to preserve cultural knowledge while advocating for Indigenous rights. Her documentaries have brought international attention to how climate change and development pressures affect Arctic Indigenous communities, demonstrating the power of Indigenous media to shape global conversations.",
  email: "pauliina.feodoroff@skoltmedia.test",
  phone: "+358-555-0186",
  picture: null,
  tags: ["Skolt-Sami", "Documentary-Filmmaker", "Cultural-Preservation", "Language-Rights", "Finland"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Pauliina_Feodoroff",
  address: {
    street: "789 Test Street",
    city: "Inari",
    state: "Lapland",
    country: "Finland",
    zipCode: "99870",
  },
  quote: "Our stories are our resistance. When we tell them, we keep our culture alive for future generations.",
  quoteReference: "https://www.finlande.fr/cinema/pauliina-feodoroff/",
} satisfies Person;
