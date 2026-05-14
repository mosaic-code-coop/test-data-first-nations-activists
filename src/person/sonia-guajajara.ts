import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "sonia-guajajara",
  fullName: "Sonia Guajajara",
  dateOfBirth: new Date("1974-03-06T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Sonia Guajajara has become Brazil's most prominent Indigenous political leader, advocating for forest protection and Indigenous rights on both national and international stages. A Guajajara leader from the Amazon rainforest, she has coordinated the Articulation of Indigenous Peoples of Brazil, representing over 300 ethnic groups in their fight against deforestation, land grabbing, and cultural destruction. In 2018, she made history by running for Vice President of Brazil on the ticket with Guilherme Boulos, bringing Indigenous perspectives to mainstream political discourse. Her leadership has been crucial in organizing resistance to policies that threaten Indigenous territories and in building international solidarity for Amazon protection.",
  email: "sonia.guajajara@apib.test",
  phone: "+55-555-0120",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/11.01.2023_-_Cerim%C3%B4nias_de_assun%C3%A7%C3%A3o_nos_cargos_das_ministras_da_Igualdade_Racial%2C_Anielle_Franco%2C_e_dos_Povos_Ind%C3%ADgenas%2C_S%C3%B4nia_Guajajara_%2852650320567%29_%28cropped%29.jpg",
  tags: ["Guajajara", "Politics", "Vice-President-Candidate", "Forest-Defender"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Sonia_Guajajara",
  address: {
    street: "2121 Test Street",
    city: "Brasília",
    state: "Distrito Federal",
    country: "Brazil",
    zipCode: "70040-010",
  },
  quote:
    "Our struggle is to remain alive, it is to guarantee the continuity of life, of the forest, of the rivers, of the animals.",
  quoteReference: "https://en.wikipedia.org/wiki/Sonia_Guajajara",
} satisfies Person;
