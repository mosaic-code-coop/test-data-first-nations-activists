import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "kathy-jetnil-kijiner",
  fullName: "Kathy Jetnil-Kijiner",
  dateOfBirth: new Date("1987-05-12T00:00:00.000Z"),
  pronouns: "she/her",
  bio: 'Kathy Jetnil-Kijiner is a poet and climate activist from the Marshall Islands who gained international recognition for her powerful spoken word poetry about climate change impacts on Pacific Island communities. Her poem "Dear Matafele Peinam," addressed to her daughter, was performed at the UN Climate Summit and brought global attention to how climate change threatens Pacific Island cultures and identities. Jetnil-Kijiner co-founded the Marshall Islands Poetry and Performance nonprofit to use creative arts as tools for climate advocacy. Her work demonstrates how Indigenous artists can transform climate science into emotional truths that inspire action.',
  email: "kathy.jetnil@marshallpoetry.test",
  phone: "+692-555-0175",
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kathy_Jetn%CC%84il-Kijiner%2C_2018.jpg",
  tags: ["Marshallese", "Climate-Poetry", "Spoken-Word", "Un-Summit", "Creative-Activism"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Kathy_Jetnil-Kijiner",
  address: {
    street: "234 Test Street",
    city: "Majuro",
    state: "Marshall Islands",
    country: "Marshall Islands",
    zipCode: "96960",
  },
  quote: "We are not drowning. We are fighting. And we are here to tell our stories.",
  quoteReference: "https://en.wikipedia.org/wiki/Kathy_Jetnil-Kijiner",
} satisfies Person;
