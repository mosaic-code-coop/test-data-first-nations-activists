import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "joseph-oleshangay",
  fullName: "Joseph Oleshangay",
  dateOfBirth: new Date("1955-09-10T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Joseph Oleshangay is a Maasai human rights lawyer with the Legal and Human Rights Center who became a vocal critic of forced relocations in Tanzania's Ngorongoro Conservation Area. His legal advocacy exposed government violations of Indigenous rights and international law, making him a target of intimidation and harassment. In March 2024, Oleshangay was forced to flee Tanzania to Kenya, fearing for his safety after his criticism of the NCA relocations intensified government pressure. His courage in speaking truth to power exemplifies the personal risks faced by Indigenous rights defenders across Africa.",
  email: "joseph.oleshangay@lhrc.test",
  phone: "+254-555-0160",
  picture: null,
  tags: ["Maasai", "Human-Rights-Lawyer", "Ngorongoro", "Forced-Relocation", "Legal-Advocacy"],
  groupMemberships: [],
  address: {
    street: "123 Test Street",
    city: "Nairobi",
    state: "Nairobi County",
    country: "Kenya",
    zipCode: "00100",
  },
  quote: "Speaking for our people's rights should not make us refugees in our own region.",
  quoteReference: "https://www.culturalsurvival.org/news/maasai-lawyer-forced-flee-tanzania",
} satisfies Person;
