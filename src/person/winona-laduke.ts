import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "winona-laduke",
  fullName: "Winona LaDuke",
  dateOfBirth: new Date("1959-08-18T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Winona LaDuke has spent her life defending what colonization tried to destroy. An Anishinaabe economist and environmental activist, she founded Honor the Earth to protect Indigenous lands from corporate exploitation, later becoming the Green Party's vice presidential candidate to bring Native voices to national politics.",
  email: "winona.laduke@honorearth.test",
  phone: "+1-555-0101",
  picture: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Eric_Janus_and_Winona_LaDuke_%283x4_cropped%29.jpg",
  tags: ["Environmental", "Renewable-Energy", "Anishinaabe", "Green-Party", "Food-Sovereignty"],
  groupMemberships: ["honor-the-earth", "white-earth-land-recovery"],
  reference: "https://en.wikipedia.org/wiki/Winona_LaDuke",
  address: {
    street: "123 Test Street",
    city: "Callaway",
    state: "Minnesota",
    country: "United States",
    zipCode: "56521",
  },
  quote:
    "What we need is to think about the next seven generations. We need to think about the future we are creating for our children and our children's children.",
  quoteReference: "https://www.azquotes.com/author/19248-Winona_LaDuke",
} satisfies Person;
