import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "nina-pacari",
  fullName: "Nina Pacari",
  dateOfBirth: new Date("1961-02-10T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Nina Pacari transformed from María Estela Vega Conejo into a powerful advocate for Indigenous nationality rights, officially changing her name to reflect her commitment to Kichwa identity and sovereignty. This Ecuadorian lawyer and politician became the first Indigenous woman elected to Ecuador's parliament in 1998, using her legal expertise to push constitutional reforms recognizing Indigenous peoples as distinct nationalities rather than ethnic minorities. Her brief tenure as foreign minister in 2003 ended when she resigned over the government's neoliberal policies, demonstrating that Indigenous leaders would not compromise their principles for political power. Pacari proved that Indigenous women could reshape national constitutions and legal frameworks while maintaining their cultural integrity.",
  email: "nina.pacari@kichwa.test",
  phone: "+593-555-0152",
  picture: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Nina_pacari_RADIO_CENTRO.png",
  tags: ["Kichwa", "Lawyer", "Foreign-Minister", "Constitutional-Law", "Pachakutik"],
  groupMemberships: ["pachakutik-movement", "confederation-nationalities-ecuador"],
  reference: "https://en.wikipedia.org/wiki/Nina_Pacari",
  address: {
    street: "666 Test Street",
    city: "Quito",
    state: "Pichincha",
    country: "Ecuador",
    zipCode: "170150",
  },
  quote:
    "Indigenous populations are not ethnic minorities, but distinct nationalities with their own language, history and territory.",
  quoteReference: "https://en.wikipedia.org/wiki/Nina_Pacari",
} satisfies Person;
