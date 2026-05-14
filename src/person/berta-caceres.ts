import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "berta-caceres",
  fullName: "Berta Cáceres",
  dateOfBirth: new Date("1971-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Berta Cáceres spent her life defending Lenca territory from destructive development projects in Honduras. An Indigenous environmental activist and Goldman Prize winner, she led the fight against the Agua Zarca hydroelectric dam that threatened to destroy sacred Lenca lands and the Gualcarque River. Her resistance forced international funders to withdraw from the project, demonstrating how Indigenous organizing could challenge powerful corporate interests. Cáceres was assassinated in 2016, but her example continues to inspire environmental defenders across Latin America.",
  email: "berta.caceres@copinh.test",
  phone: "+504-555-0198",
  picture: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Berta_C%C3%A1ceres_%28cropped%29.jpg",
  tags: ["Lenca", "Environmental-Defender", "Honduras", "Anti-Dam", "Goldman-Prize"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Berta_C%C3%A1ceres",
  address: {
    street: "891 Test Street",
    city: "La Esperanza",
    state: "Intibucá",
    country: "Honduras",
    zipCode: "13201",
  },
  quote:
    "Let us wake up! We're out of time. We must shake our conscience free of the rapacious capitalism, racism and patriarchy that will only assure our own self-destruction.",
  quoteReference: "https://www.goldmanprize.org/recipient/berta-caceres/",
} satisfies Person;
