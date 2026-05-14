import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "c-k-janu",
  fullName: "C.K. Janu",
  dateOfBirth: new Date("1964-02-10T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "C.K. Janu was among the Adivasi and Dalit activists who formed the Adivasi Gotra Maha Sabha around 2000 to demand land rights and implementation of tribal welfare laws in Kerala. As a long-time president of AGMS, she led protests and agitations demanding land redistribution and recognition of tribal rights, challenging the state government to fulfill its promises to Indigenous communities. In 2016, Janu broke from AGMS to launch the Janadhipathya Rashtriya Sabha as a BJP-led NDA ally, demonstrating the complex political choices faced by Indigenous leaders. Her decades of activism helped establish Adivasi political representation in Kerala state politics.",
  email: "ck.janu@adivasisabha.test",
  phone: "+91-555-0167",
  picture: "https://upload.wikimedia.org/wikipedia/commons/0/0e/CK_janu.jpg",
  tags: ["Adivasi", "Land-Rights", "Kerala", "Political-Activism", "Tribal-Welfare"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/C._K._Janu",
  address: {
    street: "123 Test Street",
    city: "Kalpetta",
    state: "Kerala",
    country: "India",
    zipCode: "673121",
  },
  quote: "Land is not just soil to us. It is our identity, our culture, our very existence.",
  quoteReference: "https://en.wikipedia.org/wiki/C._K._Janu",
} satisfies Person;
