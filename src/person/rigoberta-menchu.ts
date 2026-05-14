import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "rigoberta-menchu",
  fullName: "Rigoberta Menchú",
  dateOfBirth: new Date("1959-01-09T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Rigoberta Menchú emerged from unimaginable tragedy to become a powerful voice for Indigenous rights worldwide. A K'iche' Maya woman from Guatemala, she witnessed the brutal murder of her family members during the Guatemalan Civil War, including her brother and mother who were tortured and killed by government forces. Rather than succumb to despair, Menchú channeled her grief into advocacy, documenting the systematic persecution of Maya communities and working to preserve Indigenous culture. Her testimony about the genocide against Guatemala's Indigenous population brought international attention to their struggle and earned her the Nobel Peace Prize in 1992, making her the youngest recipient at the time.",
  email: "rigoberta.menchu@nobelpeace.test",
  phone: "+502-555-0108",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/8/81/20240620_NP_PRESIDENTE_BERNARDO_AREVALO_Y_KARIN_HERRERA_PARTICIPAN_EN_DIALOGO_PREMIO_NOBEL_DE_LA_PAZ_054_%28cropped%29.jpg",
  tags: ["Human-Rights", "Nobel-Laureate", "Maya", "Social-Justice"],
  groupMemberships: ["rigoberta-menchu-foundation"],
  reference: "https://en.wikipedia.org/wiki/Rigoberta_Mench%C3%BA",
  address: {
    street: "999 Test Street",
    city: "Guatemala City",
    state: "Guatemala Department",
    country: "Guatemala",
    zipCode: "01001",
  },
  quote:
    "I have lived with the Indian people, and I have seen their suffering. They cannot speak for themselves, so I must speak for them.",
  quoteReference: "https://www.nobelprize.org/prizes/peace/1992/tum/biographical/",
} satisfies Person;
