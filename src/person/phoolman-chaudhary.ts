import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "phoolman-chaudhary",
  fullName: "Phoolman Chaudhary",
  dateOfBirth: new Date("1962-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Phoolman Chaudhary is a Tharu Indigenous rights activist from Nepal who advocates for the rights of Indigenous peoples in the Terai lowlands and works to preserve traditional Tharu culture and language. She leads efforts to secure land rights for Tharu communities who have faced displacement from the creation of national parks and commercial agriculture expansion. Chaudhary's work addresses how conservation policies can marginalize Indigenous peoples while fighting for models that recognize Indigenous land stewardship. Her advocacy demonstrates how Indigenous women can challenge both feudal and modern forms of oppression.",
  email: "phoolman.chaudhary@tharuRights.test",
  phone: "+977-555-0192",
  picture: null,
  tags: ["Tharu", "Land-Rights", "Terai-Lowlands", "Cultural-Preservation", "Nepal"],
  groupMemberships: [],
  address: {
    street: "789 Test Street",
    city: "Bharatpur",
    state: "Chitwan",
    country: "Nepal",
    zipCode: "44200",
  },
  quote: "Our ancestors lived in harmony with the forests and rivers. We can teach the world how to do this again.",
  quoteReference: "https://www.iwgia.org/en/nepal.html",
} satisfies Person;
