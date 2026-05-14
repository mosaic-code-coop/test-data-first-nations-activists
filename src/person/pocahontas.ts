import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "pocahontas",
  fullName: "Pocahontas",
  dateOfBirth: new Date("1596-01-01T00:00:00.000Z"),
  pronouns: null,
  bio: "Pocahontas was a Powhatan woman whose actual life has been largely obscured by centuries of colonial mythology and romantic fiction. Captured by English colonists in 1613 and held for ransom, she was baptized as Rebecca and married tobacco planter John Rolfe in what was essentially a diplomatic arrangement to secure peace between the Powhatan Confederacy and the Jamestown colony. She traveled to England where she was presented to aristocratic society as an example of successful 'civilizing' of Indigenous peoples, dying there at approximately twenty-one years old. Her story has been persistently distorted to serve colonial narratives of peaceful cultural exchange, erasing the coercion and violence that actually characterized English-Powhatan relations.",
  email: "pocahontas@powhatan.test",
  phone: "+1-555-0138",
  picture: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Pocahontas_by_Simon_van_de_Passe_%281616%29.png",
  tags: ["Powhatan", "Diplomat", "Cultural-Bridge", "Jamestown"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Pocahontas",
  address: {
    street: "3838 Test Street",
    city: "Jamestown",
    state: "Virginia",
    country: "United States",
    zipCode: "23081",
  },
  quote: "Come not into our country to destroy us, but to teach us good things.",
  quoteReference: "https://en.wikipedia.org/wiki/Pocahontas",
} satisfies Person;
