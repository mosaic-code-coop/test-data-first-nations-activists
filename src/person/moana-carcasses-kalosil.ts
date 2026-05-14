import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "moana-carcasses-kalosil",
  fullName: "Moana Carcasses Kalosil",
  dateOfBirth: new Date("1963-12-25T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Moana Carcasses Kalosil served as Prime Minister of Vanuatu and has been a prominent advocate for climate justice and Indigenous rights in the Pacific. As a leader from Vanuatu, one of the countries most vulnerable to climate change, he has championed small island developing states in international forums and pushed for stronger climate action from industrialized nations. Kalosil's work bridging traditional Melanesian governance with modern political leadership demonstrates how Indigenous leaders can address global challenges while maintaining cultural values. His advocacy has been crucial in bringing Pacific voices to international climate negotiations.",
  email: "moana.carcasses@vanuatugov.test",
  phone: "+678-555-0172",
  picture: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Moana_Carcasses_Kalosil_2013_%28cropped%29.jpg",
  tags: ["Melanesian", "Climate-Justice", "Prime-Minister", "Small-Islands", "Vanuatu"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Moana_Carcasses_Kalosil",
  address: {
    street: "123 Test Street",
    city: "Port Vila",
    state: "Shefa Province",
    country: "Vanuatu",
    zipCode: "0001",
  },
  quote: "The Pacific Ocean connects us all. When our islands disappear, humanity loses part of its soul.",
  quoteReference: "https://en.wikipedia.org/wiki/Moana_Carcasses_Kalosil",
} satisfies Person;
