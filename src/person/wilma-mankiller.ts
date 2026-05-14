import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "wilma-mankiller",
  fullName: "Wilma Mankiller",
  dateOfBirth: new Date("1945-11-18T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Wilma Mankiller served as the first female Principal Chief of the Cherokee Nation from 1985 to 1995, transforming tribal governance and community development during her tenure. Growing up in poverty in Oklahoma, she later moved to San Francisco where she became involved in Indigenous activism during the 1969 occupation of Alcatraz. Returning to Cherokee territory in the 1970s, she focused on community development projects, including bringing running water to rural Cherokee communities. As Principal Chief, Mankiller oversaw significant economic growth, improved healthcare and education services, and strengthened tribal sovereignty while maintaining Cherokee cultural values and traditions.",
  email: "wilma.mankiller@cherokee.test",
  phone: "+1-555-0125",
  picture: "https://upload.wikimedia.org/wikipedia/commons/0/06/Wilma_Mankiller_1998.jpg",
  tags: ["Cherokee", "Chief", "First-Woman-Chief", "Tribal-Development"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Wilma_Mankiller",
  address: {
    street: "2525 Test Street",
    city: "Tahlequah",
    state: "Oklahoma",
    country: "United States",
    zipCode: "74464",
  },
  quote:
    "Prior to my election, young Cherokee girls would never have thought that they might grow up and become chief.",
  quoteReference: "https://www.brainyquote.com/authors/wilma-mankiller-quotes",
} satisfies Person;
