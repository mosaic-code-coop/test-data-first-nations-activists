import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "nemonte-nenquimo",
  fullName: "Nemonte Nenquimo",
  dateOfBirth: new Date("1986-12-05T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Nemonte Nenquimo is a Waorani leader from the Ecuadorian Amazon who led a historic legal victory protecting 500,000 acres of rainforest from oil drilling. In 2019, she received the Goldman Environmental Prize for her work organizing Indigenous communities to defend their territories against government and corporate encroachment. Nenquimo's advocacy demonstrates how Indigenous women's leadership can protect biodiversity and combat climate change. Her victory established important legal precedents for Indigenous consent and territorial rights in Ecuador, inspiring similar movements across the Amazon.",
  email: "nemonte.nenquimo@waorani.test",
  phone: "+593-555-0182",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/7/71/Nemonte_Nenquimo_2020_UNEP_Champions_of_the_Earth_laureate_credit_UNEP020-compressed.jpg",
  tags: ["Waorani", "Amazon-Protection", "Goldman-Prize", "Oil-Resistance", "Ecuador"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Nemonte_Nenquimo",
  address: {
    street: "567 Test Street",
    city: "Puyo",
    state: "Pastaza",
    country: "Ecuador",
    zipCode: "160150",
  },
  quote: "The rainforest is not for sale. It is our life, and we will defend it with our lives.",
  quoteReference: "https://en.wikipedia.org/wiki/Nemonte_Nenquimo",
} satisfies Person;
