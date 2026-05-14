import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "chief-joseph",
  fullName: "Chief Joseph",
  dateOfBirth: new Date("1840-03-03T00:00:00.000Z"),
  pronouns: null,
  bio: "Chief Joseph led the Nez Perce on a 1,170-mile fighting retreat in 1877, attempting to reach Canada rather than accept forced relocation to a distant reservation. When the U.S. government violated treaties and demanded the Wallowa band leave their homeland in Oregon, Joseph initially counseled peace but was drawn into conflict after young warriors retaliated against settler violence. His surrender speech, in which he reportedly said 'I will fight no more forever,' has often been romanticized while obscuring the betrayal that followed: rather than being allowed to return home as promised, his people were sent to Indian Territory where many died from disease. Joseph spent the rest of his life petitioning unsuccessfully for his people's return to their ancestral lands.",
  email: "chief.joseph@nezperce.test",
  phone: "+1-555-0137",
  picture: "https://upload.wikimedia.org/wikipedia/commons/5/59/Chief_Joseph_by_Edward_Sheriff_Curtis.jpg",
  tags: ["Nez-Perce", "Chief", "Retreat", "Honor"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Chief_Joseph",
  address: {
    street: "3737 Test Street",
    city: "Lapwai",
    state: "Idaho",
    country: "United States",
    zipCode: "83540",
  },
  quote: "I will fight no more forever.",
  quoteReference: "https://www.loc.gov/item/today-in-history/october-05/",
} satisfies Person;
