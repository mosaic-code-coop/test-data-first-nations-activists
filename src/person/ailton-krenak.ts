import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ailton-krenak",
  fullName: "Ailton Krenak",
  dateOfBirth: new Date("1953-09-29T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Ailton Krenak has emerged as one of Brazil's most important Indigenous intellectuals, advocating for a fundamental shift in humanity's relationship with nature. A Krenak leader, philosopher, and writer from Minas Gerais, he has spent decades challenging Western notions of progress and development that prioritize economic growth over environmental sustainability. His writings and speeches emphasize the urgent need to reconnect with Indigenous knowledge systems that view humans as part of, rather than separate from, the natural world. Krenak argues that Indigenous peoples have been \"postponing the end of the world\" since colonization began, and their wisdom is essential for addressing the climate crisis.",
  email: "ailton.krenak@krenak.test",
  phone: "+55-555-0119",
  picture: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ailton_Krenak_%285269420566%29_%28cropped%29.jpg",
  tags: ["Philosopher", "Krenak", "Environmental", "Author"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Ailton_Krenak",
  address: {
    street: "2020 Test Street",
    city: "Resplendor",
    state: "Minas Gerais",
    country: "Brazil",
    zipCode: "39737-000",
  },
  quote:
    "We need to postpone the end of the world. Indigenous peoples have been postponing the end of the world since 1500.",
  quoteReference: "https://en.wikipedia.org/wiki/Ailton_Krenak",
} satisfies Person;
