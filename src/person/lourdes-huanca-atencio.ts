import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "lourdes-huanca-atencio",
  fullName: "Lourdes Huanca Atencio",
  dateOfBirth: new Date("1960-05-20T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Lourdes Huanca Atencio built a movement of 160,000 rural women across Peru, organizing peasant, artisan, and Indigenous women to fight for land rights, gender equality, and political representation. This Aymara activist founded FENMUCARINAP in 2008, creating an organization that addresses the intersecting challenges of Indigenous identity, rural poverty, and gender-based violence in Peru's highlands. Her work connects traditional Andean concepts of community autonomy with modern struggles for women's bodily autonomy and land sovereignty. Huanca Atencio demonstrates that Indigenous women's leadership can challenge both patriarchal and colonial systems simultaneously, building power from the grassroots up.",
  email: "lourdes.huanca@fenmucarinap.test",
  phone: "+51-555-0154",
  picture: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Lourdes_Huanca_Atencio.jpg",
  tags: ["Aymara", "Peasant-Rights", "Womens-Rights", "Peru", "Fenmucarinap"],
  groupMemberships: ["fenmucarinap", "andean-womens-federation"],
  reference: "https://en.wikipedia.org/wiki/Lourdes_Huanca_Atencio",
  address: {
    street: "888 Test Street",
    city: "Cusco",
    state: "Cusco Region",
    country: "Peru",
    zipCode: "08000",
  },
  quote: "Our demands are now political. We can no longer even walk freely under this dictatorial regime of terror.",
  quoteReference: "https://en.wikipedia.org/wiki/Lourdes_Huanca_Atencio",
} satisfies Person;
