import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ken-saro-wiwa",
  fullName: "Ken Saro-Wiwa",
  dateOfBirth: new Date("1941-01-01T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Ken Saro-Wiwa led the Ogoni people's struggle against oil companies devastating their homeland in Nigeria. A writer and environmental activist, he organized non-violent resistance against Shell and other corporations whose oil extraction poisoned Ogoni lands and waters. His Movement for the Survival of the Ogoni People demanded environmental cleanup, fair compensation, and political autonomy for his community. The Nigerian military government executed Saro-Wiwa and eight other Ogoni leaders in 1995, making them martyrs for environmental justice.",
  email: "ken.saroviwa@ogoni.test",
  phone: "+234-555-0197",
  picture: "https://upload.wikimedia.org/wikipedia/en/2/2a/Ken_Saro-Wiwa.jpg",
  tags: ["Ogoni", "Oil-Resistance", "Nigeria", "Environmental-Justice", "Writer"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Ken_Saro-Wiwa",
  address: {
    street: "567 Test Street",
    city: "Port Harcourt",
    state: "Rivers State",
    country: "Nigeria",
    zipCode: "500001",
  },
  quote: "The environment is man's first right. Without a safe environment, man cannot exist to claim other rights.",
  quoteReference: "https://en.wikipedia.org/wiki/Ken_Saro-Wiwa",
} satisfies Person;
