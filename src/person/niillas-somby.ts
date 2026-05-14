import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "niillas-somby",
  fullName: "Niillas Somby",
  dateOfBirth: new Date("1948-10-15T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Niillas Somby lost his arm attempting to sabotage the Alta Dam project in Norway, sacrificing his body to protect Sami territories from flooding by hydroelectric development that would have destroyed an entire village. This Sami activist and photographer was one of seven hunger strikers during the Alta controversy in the late 1970s, participating in protests that became a symbol of Indigenous resistance across the Arctic. After his imprisonment and escape to Canada, where he was adopted by the Nuxalk Nation, Somby returned to Norway to continue advocating for Sami rights and the return of his ancestors' remains from university collections. His quest to reclaim the heads of Mons Somby and Aslak Hætta, executed after the 1852 Kautokeino rebellion, demonstrates the ongoing fight for dignity and justice that spans generations of Sami resistance.",
  email: "niillas.somby@samiactivist.test",
  phone: "+47-555-0156",
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Niillas_Aslaksen_Somby.jpg",
  tags: ["Sami", "Alta-Dam", "Activist", "Photographer", "Hunger-Striker"],
  groupMemberships: ["sami-rights-movement", "alta-action-group"],
  reference: "https://en.wikipedia.org/wiki/Niillas_Somby",
  address: {
    street: "100 Test Street",
    city: "Alta",
    state: "Finnmark",
    country: "Norway",
    zipCode: "9510",
  },
  quote: "We are not terrorists! We are defending our land and our people's future.",
  quoteReference: "https://en.wikipedia.org/wiki/Niillas_Somby",
} satisfies Person;
