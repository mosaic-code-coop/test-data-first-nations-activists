import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "patricia-gualinga",
  fullName: "Patricia Gualinga",
  dateOfBirth: new Date("1969-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Patricia Gualinga is a Kichwa human rights defender from the Ecuadorian Amazon who has spent decades fighting to protect Indigenous territories from extractive industries and advocating for the rights of Indigenous women. She played a crucial role in the Inter-American Court of Human Rights case that established important precedents for Indigenous territorial rights and cultural survival. Gualinga's advocacy combines traditional Indigenous governance with international human rights law, demonstrating how Indigenous women can lead transnational justice movements. Her work has influenced Indigenous rights jurisprudence across Latin America.",
  email: "patricia.gualinga@kichwarights.test",
  phone: "+593-555-0191",
  picture: "https://upload.wikimedia.org/wikipedia/commons/8/87/Patricia_Gualinga_%28cropped%29.jpg",
  tags: ["Kichwa", "Human-Rights-Defender", "Inter-American-Court", "Extractive-Resistance", "Ecuador"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Patricia_Gualinga",
  address: {
    street: "456 Test Street",
    city: "Puyo",
    state: "Pastaza",
    country: "Ecuador",
    zipCode: "160250",
  },
  quote: "We defend the forest not just for ourselves, but for all humanity. The jungle is the lung of the world.",
  quoteReference: "https://www.frontlinedefenders.org/en/profile/patricia-gualinga",
} satisfies Person;
