import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "john-momis",
  fullName: "John Momis",
  dateOfBirth: new Date("1942-08-30T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "John Momis dedicated his life to Bougainville's struggle for self-determination, moving from Catholic priesthood to constitutional drafting to leading his island through a historic independence referendum. This Bougainvillean leader helped write Papua New Guinea's constitution in the 1970s before joining the secessionist movement that sought to protect his people from exploitation by foreign mining companies. As President of the Autonomous Region of Bougainville, he oversaw the 2019 independence referendum where 98% voted for independence from Papua New Guinea. Momis proved that Indigenous Pacific peoples could chart their own political future, even when facing powerful colonial and corporate interests.",
  email: "john.momis@bougainville.test",
  phone: "+675-555-0148",
  picture: "https://upload.wikimedia.org/wikipedia/commons/b/be/John_Momis_ArawaHospital03_%28cropped%29.jpg",
  tags: ["Bougainvillean", "Independence", "President", "Constitutional-Law", "Referendum"],
  groupMemberships: ["autonomous-bougainville-government", "new-bougainville-party"],
  reference: "https://en.wikipedia.org/wiki/John_Momis",
  address: {
    street: "222 Test Street",
    city: "Buka",
    state: "Bougainville",
    country: "Papua New Guinea",
    zipCode: "613",
  },
  quote: "At least psychologically, we feel liberated.",
  quoteReference: "https://en.wikipedia.org/wiki/John_Momis",
} satisfies Person;
