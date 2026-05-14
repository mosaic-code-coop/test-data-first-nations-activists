import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "lourdes-tiban",
  fullName: "Lourdes Tibán",
  dateOfBirth: new Date("1959-03-15T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Lourdes Tibán is a Kichwa lawyer and former Congress member from Ecuador who has spent decades advocating for Indigenous rights, women's rights, and plurinational democracy. She played a crucial role in Ecuador's 2008 constitution that recognized the Rights of Nature and Indigenous territorial rights. Tibán's legal work has challenged discriminatory laws and defended Indigenous communities facing extractive industry pressures. Her advocacy combines traditional Indigenous governance principles with modern legal frameworks, demonstrating how Indigenous women can lead constitutional transformation.",
  email: "lourdes.tiban@kichwalaw.test",
  phone: "+593-555-0181",
  picture: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Lourdes_Tib%C3%A1n_in_Feb_2012.jpg",
  tags: ["Kichwa", "Lawyer", "Congress-Member", "Rights-Of-Nature", "Ecuador"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Lourdes_Tib%C3%A1n",
  address: {
    street: "234 Test Street",
    city: "Quito",
    state: "Pichincha",
    country: "Ecuador",
    zipCode: "170150",
  },
  quote: "The earth is not a commodity. It is our mother, and she has rights that must be respected.",
  quoteReference: "https://therightsofnature.org/ecuador-rights-of-nature/",
} satisfies Person;
