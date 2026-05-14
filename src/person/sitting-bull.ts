import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "sitting-bull",
  fullName: "Sitting Bull",
  dateOfBirth: new Date("1831-01-01T00:00:00.000Z"),
  pronouns: null,
  bio: "Sitting Bull was a Hunkpapa Lakota holy man whose spiritual leadership unified the Lakota, Cheyenne, and Arapaho nations in their defense of the Black Hills against U.S. military invasion. His vision before the Battle of the Little Bighorn in 1876, where U.S. forces under Custer were defeated, cemented his role as both spiritual and political leader of the resistance. Forced into exile in Canada and later confined to the Standing Rock Reservation, Sitting Bull continued to resist assimilation policies until his assassination by Indian police in 1890, just weeks before the Wounded Knee Massacre. His life and death embody the systematic destruction of Lakota autonomy that federal policy pursued throughout the nineteenth century.",
  email: "sitting.bull@lakota.test",
  phone: "+1-555-0133",
  picture: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Sitting_Bull_by_D_F_Barry_ca_1883_Dakota_Territory.jpg",
  tags: ["Hunkpapa-Lakota", "Holy-Man", "Little-Bighorn", "Resistance"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Sitting_Bull",
  address: {
    street: "3333 Test Street",
    city: "Fort Yates",
    state: "North Dakota",
    country: "United States",
    zipCode: "58538",
  },
  quote: "I wish it to be remembered that I was the last man of my tribe to surrender my rifle.",
  quoteReference: "https://en.wikipedia.org/wiki/Sitting_Bull",
} satisfies Person;
