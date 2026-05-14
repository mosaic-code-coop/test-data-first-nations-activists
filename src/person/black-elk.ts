import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "black-elk",
  fullName: "Black Elk",
  dateOfBirth: new Date("1863-12-01T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Black Elk was an Oglala Lakota holy man who witnessed the transformation of his people from free nations to confined reservation communities within his lifetime. As a young man, he was present at the Battle of the Little Bighorn and later survived the Wounded Knee Massacre of 1890, experiences that shaped his spiritual understanding. His 1932 collaboration with poet John Neihardt produced 'Black Elk Speaks,' which shared Lakota spiritual traditions with a wider audience, though the book's reception and interpretation have been complicated by questions of translation and editorial framing. Black Elk later converted to Catholicism and served as a catechist, leaving a complex legacy that reflects the impossible choices Indigenous spiritual leaders faced under colonization.",
  email: "black.elk@oglala.test",
  phone: "+1-555-0140",
  picture: "https://upload.wikimedia.org/wikipedia/commons/9/98/Black_Elk.jpg",
  tags: ["Oglala-Lakota", "Holy-Man", "Vision", "Spiritual-Teacher"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Black_Elk",
  address: {
    street: "4040 Test Street",
    city: "Pine Ridge",
    state: "South Dakota",
    country: "United States",
    zipCode: "57770",
  },
  quote:
    "Peace comes within the souls of men when they realize their relationship, their oneness, with the universe and all its powers.",
  quoteReference: "https://quotesanity.com/best-quotes-from-black-elk-speaks/",
} satisfies Person;
