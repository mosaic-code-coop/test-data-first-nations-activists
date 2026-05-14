import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "dennis-banks",
  fullName: "Dennis Banks",
  dateOfBirth: new Date("1937-04-12T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Dennis Banks understood that Native people needed to reclaim their power, not just ask for it. An Anishinaabe leader who co-founded the American Indian Movement, he organized the occupation of Wounded Knee in 1973, confronting centuries of broken treaties and demanding recognition of Indigenous sovereignty.",
  email: "dennis.banks@aim.test",
  phone: "+1-555-0102",
  picture: "https://upload.wikimedia.org/wikipedia/commons/7/70/Dennis_Banks_%288673602267%29_%28cropped%29.jpg",
  tags: ["Civil-Rights", "AIM", "Anishinaabe", "Wounded-Knee", "Activism"],
  groupMemberships: ["american-indian-movement", "honor-the-earth"],
  reference: "https://en.wikipedia.org/wiki/Dennis_Banks",
  address: {
    street: "456 Test Street",
    city: "Minneapolis",
    state: "Minnesota",
    country: "United States",
    zipCode: "55404",
  },
  quote:
    "We have to use our culture, we have to use our spirituality, and we have to use our ceremonies to heal ourselves and to heal the Earth.",
  quoteReference: "https://www.brainyquote.com/authors/dennis-banks-quotes",
} satisfies Person;
