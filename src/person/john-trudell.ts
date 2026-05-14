import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "john-trudell",
  fullName: "John Trudell",
  dateOfBirth: new Date("1946-02-15T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "John Trudell channeled his activism through poetry, music, and spoken word, becoming one of the most compelling voices in the American Indian Movement. A Santee Dakota activist, he served as AIM's national chairman for many years and was a constant presence at protests and occupations throughout the 1970s. After the suspicious deaths of his wife, three children, and mother-in-law in a house fire in 1979, Trudell turned increasingly to artistic expression as a form of resistance. His poetry and music explored themes of Indigenous identity, spirituality, and the ongoing struggle against colonization, creating works that resonated far beyond Native communities.",
  email: "john.trudell@aim.test",
  phone: "+1-555-0116",
  picture: "https://upload.wikimedia.org/wikipedia/commons/e/e4/John_Trudell_1997-09-24_61232-37.jpg",
  tags: ["Poet", "Santee-Dakota", "AIM", "Musician", "Spokesman"],
  groupMemberships: ["american-indian-movement", "indigenous-musicians-collective"],
  reference: "https://en.wikipedia.org/wiki/John_Trudell",
  address: {
    street: "1717 Test Street",
    city: "Santa Fe",
    state: "New Mexico",
    country: "United States",
    zipCode: "87501",
  },
  quote:
    "We are not Indians and we are not Native Americans. We are older than both concepts. We are the people, we are the human beings.",
  quoteReference: "https://www.brainyquote.com/authors/john-trudell-quotes",
} satisfies Person;
