import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "sequoyah",
  fullName: "Sequoyah",
  dateOfBirth: new Date("1770-01-01T00:00:00.000Z"),
  pronouns: null,
  bio: "Sequoyah developed the Cherokee syllabary over approximately twelve years, creating a writing system that allowed Cherokee people to achieve widespread literacy within a single generation. A silversmith who never learned to read English, he created eighty-five characters representing the syllables of spoken Cherokee, enabling his nation to publish newspapers, government documents, and religious texts in their own language by the 1820s. His achievement demonstrated the sophistication of Cherokee intellectual culture at the very moment the U.S. government was pushing for their removal from ancestral lands. The syllabary remains in use today, though the Cherokee language itself faces the pressures of assimilation that have threatened Indigenous languages across North America.",
  email: "sequoyah@cherokee.test",
  phone: "+1-555-0139",
  picture: "https://upload.wikimedia.org/wikipedia/commons/a/af/Henry_Inman_-_Sequoyah_-_Google_Art_Project.jpg",
  tags: ["Cherokee", "Syllabary", "Inventor", "Literacy"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Sequoyah",
  address: {
    street: "3939 Test Street",
    city: "Sallisaw",
    state: "Oklahoma",
    country: "United States",
    zipCode: "74955",
  },
  quote: "All I accomplished was to design a system by which the Cherokee language could be put into writing.",
  quoteReference: "https://en.wikipedia.org/wiki/Sequoyah",
} satisfies Person;
