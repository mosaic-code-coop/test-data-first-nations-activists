import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ada-deer",
  fullName: "Ada Deer",
  dateOfBirth: new Date("1935-08-07T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Ada Deer led the successful campaign to reverse the federal termination of the Menominee Nation, one of the most significant victories in modern tribal sovereignty. When the U.S. government terminated the Menominee in 1954, stripping them of federal recognition and treaty rights, Deer organized her community to fight back through legislation rather than litigation. Her tireless lobbying resulted in the Menominee Restoration Act of 1973, establishing a precedent that other terminated tribes would follow. Two decades later, she became the first woman to lead the Bureau of Indian Affairs, working to shift the agency's approach from paternalism toward genuine tribal self-determination.",
  email: "ada.deer@bia.test",
  phone: "+1-555-0122",
  picture: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Ada_E._Deer.jpg",
  tags: ["Menominee", "BIA", "Termination-Restoration", "Federal-Recognition"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Ada_Deer",
  address: {
    street: "2323 Test Street",
    city: "Keshena",
    state: "Wisconsin",
    country: "United States",
    zipCode: "54135",
  },
  quote: "My proudest moments have not been winning this or that award, but making a difference.",
  quoteReference: "https://en.wikipedia.org/wiki/Ada_Deer",
} satisfies Person;
