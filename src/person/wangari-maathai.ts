import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "wangari-maathai",
  fullName: "Wangari Maathai",
  dateOfBirth: new Date("1940-01-01T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Wangari Maathai connected environmental restoration with women's empowerment and democratic rights in Kenya. The first African woman to win the Nobel Peace Prize, she founded the Green Belt Movement to combat deforestation while providing income for rural women. Her approach recognized that environmental degradation and social injustice were interconnected, and that communities needed to control their own resources. Maathai's grassroots organizing inspired environmental movements across Africa and demonstrated how tree planting could become an act of resistance.",
  email: "wangari.maathai@greenbelt.test",
  phone: "+254-555-0196",
  picture: "https://upload.wikimedia.org/wikipedia/commons/d/da/Wangari_Maathai_in_2001.jpg",
  tags: ["Environmental", "Women-Empowerment", "Kenya", "Reforestation", "Nobel-Laureate"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Wangari_Maathai",
  address: {
    street: "234 Test Street",
    city: "Nairobi",
    state: "Nairobi County",
    country: "Kenya",
    zipCode: "00100",
  },
  quote: "It's the little things citizens do. That's what will make the difference. My little thing is planting trees.",
  quoteReference: "https://www.brainyquote.com/authors/wangari-maathai-quotes",
} satisfies Person;
