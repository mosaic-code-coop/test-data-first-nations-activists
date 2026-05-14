import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ladonna-harris",
  fullName: "LaDonna Harris",
  dateOfBirth: new Date("1931-02-15T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "LaDonna Harris has devoted her life to advancing Indigenous rights through coalition-building and political engagement spanning over seven decades. A Comanche activist and the founder of Americans for Indian Opportunity, she has worked tirelessly to create opportunities for Native Americans in education, economic development, and political participation. Harris served on numerous federal commissions and advisory boards, helping to shape policy on Indian affairs during multiple presidential administrations. Her approach has emphasized building bridges between Indigenous communities and mainstream institutions while always maintaining focus on tribal sovereignty and self-determination.",
  email: "ladonna.harris@ait.test",
  phone: "+1-555-0118",
  picture: "https://upload.wikimedia.org/wikipedia/commons/a/aa/LaDonnaHarris.png",
  tags: ["Comanche", "Activism", "Diplomacy", "Tribal-Relations"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/LaDonna_Harris",
  address: {
    street: "1919 Test Street",
    city: "Bernalillo",
    state: "New Mexico",
    country: "United States",
    zipCode: "87004",
  },
  quote: "We have to learn how to be Indians in the 20th century and beyond, maintaining our values and our culture.",
  quoteReference: "https://en.wikipedia.org/wiki/LaDonna_Harris",
} satisfies Person;
