import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "buffy-sainte-marie",
  fullName: "Buffy Sainte-Marie",
  dateOfBirth: new Date("1941-02-20T00:00:00.000Z"),
  pronouns: "she/her",
  bio: 'Buffy Sainte-Marie used her music as a vehicle for social change and Indigenous rights advocacy throughout her decades-long career. A Cree singer-songwriter and educator, she wrote powerful protest songs that addressed war, social injustice, and the struggles facing Indigenous peoples. Her 1964 song "Universal Soldier" became an anti-war anthem, while tracks like "Now That the Buffalo\'s Gone" brought attention to the ongoing displacement and oppression of Native Americans. Beyond music, Sainte-Marie pioneered the use of digital technology in Indigenous education and spent years working to improve educational opportunities for Native children.',
  email: "buffy.saintemarie@music.test",
  phone: "+1-555-0113",
  picture: "https://upload.wikimedia.org/wikipedia/commons/7/7c/1970_Buffy_Sainte-Marie.jpg",
  tags: ["Musician", "Cree", "Activist", "Folk-Singer"],
  groupMemberships: ["indigenous-musicians-collective"],
  reference: "https://en.wikipedia.org/wiki/Buffy_Sainte-Marie",
  address: {
    street: "1414 Test Street",
    city: "Saskatoon",
    state: "Saskatchewan",
    country: "Canada",
    zipCode: "S7K 3J7",
  },
  quote: "Soldiers are dreamers; when the guns begin they think of firelit homes, clean beds, and wives.",
  quoteReference: "https://www.brainyquote.com/authors/buffy-sainte-marie-quotes",
} satisfies Person;
