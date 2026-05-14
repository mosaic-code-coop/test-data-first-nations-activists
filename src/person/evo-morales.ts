import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "evo-morales",
  fullName: "Evo Morales",
  dateOfBirth: new Date("1959-10-26T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Evo Morales rose from coca farmer to become Bolivia's first Indigenous president, implementing constitutional reforms that recognized Indigenous peoples as distinct nations with rights to self-governance and ancestral territories. This Aymara leader redistributed 134 million acres of land to Indigenous families, many of whom had been forced to work as sharecroppers or slaves on estates stolen from their ancestors. His presidency marked a historic reversal of five centuries of colonial domination, proving that Indigenous peoples could reclaim political power and use it to benefit their communities. Morales' complex legacy demonstrates both the possibilities and challenges of Indigenous political leadership in settler colonial states.",
  email: "evo.morales@bolivia.test",
  phone: "+591-555-0153",
  picture: "https://upload.wikimedia.org/wikipedia/commons/5/58/Evo_Morales_Ayma_%28cropped_3%29.jpg",
  tags: ["Aymara", "President", "Coca-Farmers", "Mas-Party", "Bolivia"],
  groupMemberships: ["movement-towards-socialism", "confederation-coca-producers"],
  reference: "https://en.wikipedia.org/wiki/Evo_Morales",
  address: {
    street: "777 Test Street",
    city: "La Paz",
    state: "La Paz Department",
    country: "Bolivia",
    zipCode: "0000",
  },
  quote: "Aymaras, Quechuas, and Mojeños, we are presidents.",
  quoteReference: "https://en.wikipedia.org/wiki/Evo_Morales",
} satisfies Person;
