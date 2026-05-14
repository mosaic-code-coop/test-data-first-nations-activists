import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "charlene-teters",
  fullName: "Charlene Teters",
  dateOfBirth: new Date("1952-02-18T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Charlene Teters confronted racism when she least expected it - at her son's University of Illinois basketball game, where she witnessed the degrading spectacle of the \"Chief Illiniwek\" mascot. A Spokane artist and activist, she organized protests against Native American sports mascots, challenging institutions across the country to abandon these harmful stereotypes. Her advocacy sparked a national movement that forced some universities and professional teams to change their practices, though many continue to resist. Teters' work exposed how deeply embedded these racist representations were in American sports culture.",
  email: "charlene.teters@spokane.test",
  phone: "+1-555-0111",
  picture: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Charlene_Teters_-_Senate_Hearing_on_05_May_2011.jpg",
  tags: ["Artist", "Anti-Racism", "Spokane", "Mascot-Activism"],
  groupMemberships: ["national-coalition-racism-sports"],
  reference: "https://en.wikipedia.org/wiki/Charlene_Teters",
  address: {
    street: "1212 Test Street",
    city: "Spokane",
    state: "Washington",
    country: "United States",
    zipCode: "99201",
  },
  quote: "My art was a vehicle to make my voice bigger.",
  quoteReference: "https://en.wikipedia.org/wiki/Charlene_Teters",
} satisfies Person;
