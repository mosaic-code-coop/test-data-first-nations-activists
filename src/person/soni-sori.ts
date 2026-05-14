import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "soni-sori",
  fullName: "Soni Sori",
  dateOfBirth: new Date("1975-01-15T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Soni Sori is a fearless Adivasi rights activist from Chhattisgarh who has become a vocal critic of police violence and brutality against tribal communities. Despite facing arrest, torture, and ongoing harassment for her activism, she continues to document human rights abuses and support families affected by conflict between security forces and Maoist groups. Sori has inspired Adivasi women across India to speak out against sexual violence and assault at the hands of police. In 2018, she received the Front Line Defenders Award for Human Rights Defenders at Risk, recognizing her courage in the face of extreme personal danger.",
  email: "soni.sori@adivasisrights.test",
  phone: "+91-555-0165",
  picture: "https://upload.wikimedia.org/wikipedia/commons/5/59/Soni_Sori_at_Bhopal_Jan_Utsav_2017.jpg",
  tags: ["Adivasi", "Human-Rights", "Police-Brutality", "Women-Rights", "Chhattisgarh"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Soni_Sori",
  address: {
    street: "456 Test Street",
    city: "Jagdalpur",
    state: "Chhattisgarh",
    country: "India",
    zipCode: "494001",
  },
  quote: "They can arrest my body, but they cannot arrest the truth or our people's struggle for justice.",
  quoteReference: "https://www.frontlinedefenders.org/en/profile/soni-sori",
} satisfies Person;
