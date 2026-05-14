import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "clyde-bellecourt",
  fullName: "Clyde Bellecourt",
  dateOfBirth: new Date("1936-05-08T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Clyde Bellecourt understood that Indigenous people in cities faced the same oppression as those on reservations, just in different forms. An Anishinaabe activist and co-founder of the American Indian Movement, he organized Native communities in Minneapolis to fight police brutality and systemic discrimination. His work transformed urban Indigenous activism and proved that Native identity could thrive in concrete jungles as powerfully as on ancestral lands. Bellecourt's organizing laid the groundwork for AIM's later nationwide actions, making Minneapolis the birthplace of modern Native American civil rights.",
  email: "clyde.bellecourt@aim.test",
  phone: "+1-555-0109",
  picture: "https://upload.wikimedia.org/wikipedia/commons/1/1a/C_Bellecourt_by_M_Spencer.jpg",
  tags: ["Civil-Rights", "AIM", "Anishinaabe", "Urban-Activism"],
  groupMemberships: ["american-indian-movement", "honor-the-earth"],
  reference: "https://en.wikipedia.org/wiki/Clyde_Bellecourt",
  address: {
    street: "1010 Test Street",
    city: "Minneapolis",
    state: "Minnesota",
    country: "United States",
    zipCode: "55411",
  },
  quote:
    "We are the landlords of the country, it is the end of the month, the rent is due, and AIM is going to collect.",
  quoteReference: "https://www.azquotes.com/author/51618-Clyde_Bellecourt",
} satisfies Person;
