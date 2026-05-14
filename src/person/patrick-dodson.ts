import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "patrick-dodson",
  fullName: "Patrick Dodson",
  dateOfBirth: new Date("1948-01-29T00:00:00.000Z"),
  pronouns: "he/him",
  bio: 'Patrick Dodson earned the title "Father of Reconciliation" through decades of building bridges between Indigenous and non-Indigenous Australians, refusing to accept that these communities were destined for permanent division. This Yawuru man left the Catholic priesthood to dedicate himself fully to Aboriginal rights, serving as inaugural chair of the Council for Aboriginal Reconciliation and helping negotiate the return of Uluru to its traditional owners. His work as a royal commissioner investigating Aboriginal deaths in custody exposed systemic injustices that demanded immediate action. Dodson proved that reconciliation required more than good intentions—it demanded structural change and genuine recognition of Aboriginal sovereignty.',
  email: "pat.dodson@reconciliation.test",
  phone: "+61-555-0145",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Senator_Patrick_Dodson_in_New_York_-_2023_%28000085339%29_%28cropped%29.jpg",
  tags: ["Yawuru", "Reconciliation", "Senator", "Peace-Prize"],
  groupMemberships: ["council-aboriginal-reconciliation", "senate-australia"],
  reference: "https://en.wikipedia.org/wiki/Pat_Dodson",
  address: {
    street: "654 Test Street",
    city: "Broome",
    state: "Western Australia",
    country: "Australia",
    zipCode: "6725",
  },
  quote: "Reconciliation is a practical reality and a future that all should be working towards.",
  quoteReference: "https://en.wikipedia.org/wiki/Pat_Dodson",
} satisfies Person;
