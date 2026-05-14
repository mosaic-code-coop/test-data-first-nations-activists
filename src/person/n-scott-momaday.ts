import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "n-scott-momaday",
  fullName: "N. Scott Momaday",
  dateOfBirth: new Date("1934-02-27T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "N. Scott Momaday made literary history in 1969 when he became the first Native American to win the Pulitzer Prize for Fiction for his novel \"House Made of Dawn.\" A Kiowa author, poet, and professor, Momaday grew up between two worlds - his father's Kiowa heritage and his mother's European-American background - experiences that deeply influenced his writing. His work explores themes of identity, place, and the relationship between traditional and modern ways of life. Beyond his literary achievements, Momaday has been a influential educator, helping establish Native American studies programs and mentoring countless Indigenous writers and scholars.",
  email: "scott.momaday@kiowa.test",
  phone: "+1-555-0127",
  picture: "https://upload.wikimedia.org/wikipedia/commons/4/4d/N_Scott_Momaday_George_W_Bush.jpg",
  tags: ["Kiowa", "Pulitzer", "Author", "House-Made-Dawn"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/N._Scott_Momaday",
  address: {
    street: "2727 Test Street",
    city: "Lawton",
    state: "Oklahoma",
    country: "United States",
    zipCode: "73501",
  },
  quote: "We are what we imagine. Our very existence consists in our imagination of ourselves.",
  quoteReference: "https://www.brainyquote.com/authors/n-scott-momaday-quotes",
} satisfies Person;
