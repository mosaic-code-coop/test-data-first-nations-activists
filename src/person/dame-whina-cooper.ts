import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "dame-whina-cooper",
  fullName: "Dame Whina Cooper",
  dateOfBirth: new Date("1895-12-09T00:00:00.000Z"),
  pronouns: "she/her",
  bio: 'Dame Whina Cooper transformed from an 18-year-old challenging mudflat leases to the revered mother of a nation leading a 1,100-kilometer march at age 79. This Te Rarawa leader organized the 1975 Māori Land March from Cape Reinga to Parliament, walking the length of New Zealand with the simple demand: "Not one more acre of Māori land." Her march grew from 50 to 5,000 supporters and delivered a petition signed by 60,000 people, forcing land rights back into national consciousness. Cooper proved that moral leadership could move mountains, earning the title Te Whaea o te Motu—Mother of the Nation.',
  email: "whina.cooper@landmarch.test",
  phone: "+64-555-0142",
  picture: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Whina_Cooper_in_Hamilton.jpg",
  tags: ["Maori", "Land-March", "Te-Rarawa", "Kuia", "Land-Rights"],
  groupMemberships: ["maori-land-march-committee", "maori-womens-welfare-league"],
  reference: "https://en.wikipedia.org/wiki/Whina_Cooper",
  address: {
    street: "456 Test Street",
    city: "Panguru",
    state: "Northland",
    country: "New Zealand",
    zipCode: "0478",
  },
  quote: "The land is precious. The land is our life. The land must never be sold.",
  quoteReference: "https://en.wikipedia.org/wiki/Whina_Cooper",
} satisfies Person;
