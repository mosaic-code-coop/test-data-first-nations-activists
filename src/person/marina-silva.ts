import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "marina-silva",
  fullName: "Marina Silva",
  dateOfBirth: new Date("1958-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Marina Silva represents the intersection of Indigenous advocacy and national politics in Brazil. Born into a rubber tapper family in the Amazon, she worked alongside Chico Mendes before becoming a senator and presidential candidate. As Environment Minister, she created protected areas and fought against deforestation, often clashing with agribusiness interests. Silva's political career demonstrates how Indigenous knowledge and environmental protection can be brought into mainstream governance, though she faces constant resistance from extractive industries.",
  email: "marina.silva@sustentabilidade.test",
  phone: "+55-555-0199",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/31.07.2024_-_Visita_%C3%A0_Base_Prevfogo_Ibama_de_Corumb%C3%A1_%2853893982568%29_%28cropped%29.jpg",
  tags: ["Amazon", "Politics", "Environmental", "Brazil", "Rubber-Tapper"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Marina_Silva",
  address: {
    street: "123 Test Street",
    city: "Rio Branco",
    state: "Acre",
    country: "Brazil",
    zipCode: "69900-000",
  },
  quote:
    "We cannot have environmental protection without social justice, and we cannot have social justice without environmental protection.",
  quoteReference: "https://en.wikipedia.org/wiki/Marina_Silva",
} satisfies Person;
