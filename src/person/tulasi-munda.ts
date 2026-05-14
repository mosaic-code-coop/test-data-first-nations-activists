import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "tulasi-munda",
  fullName: "Tulasi Munda",
  dateOfBirth: new Date("1947-05-22T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Tulasi Munda dedicated her life to education and started an informal school in 1964 in Odisha's iron ore mining area to educate children from local Adivasi communities who would otherwise have ended up as child laborers in the mines. For over five decades, she has provided education to thousands of tribal children, ensuring they have alternatives to dangerous mining work. Munda's grassroots approach to education combines traditional Adivasi knowledge with formal learning, helping children maintain their cultural identity while gaining skills for the modern world. Her work demonstrates how education can be a form of resistance against exploitation and marginalization.",
  email: "tulasi.munda@tribalEducation.test",
  phone: "+91-555-0168",
  picture: null,
  tags: ["Adivasi", "Education", "Child-Labor", "Odisha", "Mining-Resistance"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Tulasi_Munda",
  address: {
    street: "567 Test Street",
    city: "Keonjhar",
    state: "Odisha",
    country: "India",
    zipCode: "758001",
  },
  quote: "Education is the light that can free our children from the darkness of exploitation.",
  quoteReference: "https://en.wikipedia.org/wiki/Tulasi_Munda",
} satisfies Person;
