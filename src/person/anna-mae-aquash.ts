import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "anna-mae-aquash",
  fullName: "Anna Mae Aquash",
  dateOfBirth: new Date("1945-03-27T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Anna Mae Aquash was a Mi'kmaq activist from Nova Scotia who became deeply involved in the American Indian Movement during the turbulent 1970s, participating in the occupation of Wounded Knee and organizing efforts across the United States. Her murder in 1975, initially mishandled by authorities who claimed she died of exposure, remained unsolved for decades and highlighted the dangers faced by Indigenous women activists. The circumstances surrounding her death, which involved both federal surveillance and internal movement tensions, exposed the complex and sometimes deadly pressures that Indigenous rights defenders navigated during this period. Her case became a symbol of the broader pattern of violence against Native women that continues to demand justice today.",
  email: "annamae.aquash@aim.test",
  phone: "+1-555-0121",
  picture: "https://upload.wikimedia.org/wikipedia/en/a/aa/Anna_Mae_Pictou-Aquash.jpg",
  tags: ["Mikmaq", "AIM", "Civil-Rights", "Martyr"],
  groupMemberships: ["american-indian-movement"],
  reference: "https://en.wikipedia.org/wiki/Anna_Mae_Aquash",
  address: {
    street: "2222 Test Street",
    city: "Boston",
    state: "Massachusetts",
    country: "United States",
    zipCode: "02101",
  },
  quote: "I will die, if necessary, as a proud Ojibway woman.",
  quoteReference: "https://en.wikipedia.org/wiki/Anna_Mae_Aquash",
} satisfies Person;
