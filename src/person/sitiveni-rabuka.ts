import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "sitiveni-rabuka",
  fullName: "Sitiveni Rabuka",
  dateOfBirth: new Date("1948-09-13T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Sitiveni Rabuka justified his 1987 military coups as necessary to protect indigenous Fijian rights from Indian political dominance, later evolving to embrace multiracial democracy and constitutional reform. This former soldier claimed he acted to \"safeguard the Fijian way of life\" when he overthrew the elected Labour coalition government, leading to years of racial discrimination enshrined in Fiji's constitution. His democratic political career from 1992-1999 saw him work with Indo-Fijian leaders to create the more equitable 1997 Constitution, demonstrating a remarkable transformation from coup leader to reconciliation advocate. Rabuka's complex legacy illustrates how Indigenous Pacific leaders sometimes used undemocratic means to protect their people's interests, before learning that true security required inclusive governance.",
  email: "sitiveni.rabuka@fiji.test",
  phone: "+679-555-0150",
  picture: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Sitiveni_Rabuka_PIF_2023.jpg",
  tags: ["Fijian", "Military", "Prime-Minister", "Coups", "Reconciliation"],
  groupMemberships: ["peoples-alliance-fiji", "fiji-military-forces"],
  reference: "https://en.wikipedia.org/wiki/Sitiveni_Rabuka",
  address: {
    street: "444 Test Street",
    city: "Suva",
    state: "Central Division",
    country: "Fiji",
    zipCode: "FJ",
  },
  quote:
    "There is hope: even I changed to team up with my former adversaries to implement a more equitable Constitution.",
  quoteReference: "https://en.wikipedia.org/wiki/Sitiveni_Rabuka",
} satisfies Person;
