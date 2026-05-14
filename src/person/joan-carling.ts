import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "joan-carling",
  fullName: "Joan Carling",
  dateOfBirth: new Date("1970-03-18T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Joan Carling is an Indigenous rights activist from the Cordillera region of the Philippines who served as Secretary General of the Asia Indigenous Peoples Pact and co-convener of the Indigenous Peoples Major Group for Sustainable Development. She advocates for Indigenous peoples' rights to land, territories, and resources while promoting their role in environmental conservation and sustainable development. Carling has been recognized globally for her work bridging Indigenous knowledge systems with international policy frameworks. Her advocacy spans from local community organizing to United Nations forums, ensuring Indigenous voices shape global discussions on climate change and human rights.",
  email: "joan.carling@cordillera.test",
  phone: "+63-555-0171",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/Joan_Carling_beim_Champions_of_the_Earth_2018_Award.jpg",
  tags: ["Cordillera", "Sustainable-Development", "Un-Advocacy", "Environmental-Conservation", "Philippines"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Joan_Carling",
  address: {
    street: "345 Test Street",
    city: "Baguio",
    state: "Benguet",
    country: "Philippines",
    zipCode: "2600",
  },
  quote: "We are not just beneficiaries of development, we are partners in creating sustainable futures.",
  quoteReference: "https://en.wikipedia.org/wiki/Joan_Carling",
} satisfies Person;
