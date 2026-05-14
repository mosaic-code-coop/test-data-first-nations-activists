import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "leonard-peltier",
  fullName: "Leonard Peltier",
  dateOfBirth: new Date("1944-09-12T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Leonard Peltier became a symbol of Indigenous resistance during nearly five decades of imprisonment. An Anishinaabe-Dakota activist and member of the American Indian Movement, he was convicted in the 1975 shooting deaths of two FBI agents on the Pine Ridge Reservation amid a period of intense conflict and government surveillance of Native activists. His case became internationally recognized as emblematic of injustices faced by Indigenous people within the American legal system. In January 2025, President Biden granted him clemency, acknowledging the controversy surrounding his conviction and his status as one of the world's longest-serving Indigenous political prisoners.",
  email: "leonard.peltier@freeleonard.test",
  phone: "+1-555-0105",
  picture: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Leonard_Peltier_mug_shot_%28cropped%29.jpg",
  tags: ["Political-Prisoner", "AIM", "Civil-Rights", "Clemency"],
  groupMemberships: ["american-indian-movement"],
  reference: "https://en.wikipedia.org/wiki/Leonard_Peltier",
  address: {
    street: "555 Test Street",
    city: "Belcourt",
    state: "North Dakota",
    country: "United States",
    zipCode: "58316",
  },
  quote:
    "I am innocent. But I am also a victim of the persecution and harassment that has been inflicted upon Indian people.",
  quoteReference: "https://www.whoisleonardpeltier.info/",
} satisfies Person;
