import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "te-whiti-o-rongomai",
  fullName: "Te Whiti-o-Rongomai",
  dateOfBirth: new Date("1830-01-01T00:00:00.000Z"),
  pronouns: null,
  bio: "Te Whiti-o-Rongomai established Parihaka as a beacon of peaceful resistance when the New Zealand government sought to crush Māori independence through force. This Taranaki leader and his people practiced nonviolent resistance against colonial land confiscation, welcoming government troops with children offering food even as their village was invaded in 1881. His philosophy of passive resistance influenced Mahatma Gandhi and demonstrated that Indigenous peoples could resist colonization through spiritual strength rather than violence. Te Whiti proved that moral authority could challenge military might, though the cost was the destruction of his thriving community.",
  email: "te.whiti@parihaka.test",
  phone: "+64-555-0141",
  picture: null,
  tags: ["Maori", "Parihaka", "Nonviolent-Resistance", "Taranaki", "Spiritual-Leader"],
  groupMemberships: ["parihaka-settlement", "maori-peace-movement"],
  reference: "https://en.wikipedia.org/wiki/Te_Whiti_o_Rongomai",
  address: {
    street: "123 Test Street",
    city: "Parihaka",
    state: "Taranaki",
    country: "New Zealand",
    zipCode: "4374",
  },
  quote:
    "Though some, in darkness of heart, seeing their land ravished, might wish to take arms and kill the aggressors, I say it must not be.",
  quoteReference: "https://en.wikipedia.org/wiki/Te_Whiti_o_Rongomai",
} satisfies Person;
