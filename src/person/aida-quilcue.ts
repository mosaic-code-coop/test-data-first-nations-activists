import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "aida-quilcue",
  fullName: "Aída Quilcué",
  dateOfBirth: new Date("1961-11-22T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Aída Quilcué is a Nasa Indigenous leader from Colombia who has advocated for peace, territorial rights, and Indigenous autonomy during decades of armed conflict. As executive coordinator of the National Indigenous Organization of Colombia (ONIC), she has led efforts to protect Indigenous communities caught between paramilitary groups, guerrillas, and state forces. Quilcué's work demonstrates how Indigenous leaders navigate complex conflicts while maintaining cultural integrity and territorial sovereignty. Her advocacy for Indigenous jurisdiction and autonomous governance has influenced Colombia's peace process and transitional justice mechanisms.",
  email: "aida.quilcue@onicolombia.test",
  phone: "+57-555-0183",
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Aida_Quilcu%C3%A9_2017.jpg",
  tags: ["NASA", "Peace-Process", "Territorial-Rights", "Armed-Conflict", "Colombia"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Aída_Quilcué",
  address: {
    street: "890 Test Street",
    city: "Popayán",
    state: "Cauca",
    country: "Colombia",
    zipCode: "190001",
  },
  quote: "We want peace, but not the peace of cemeteries. We want the peace of dignity and territorial autonomy.",
  quoteReference: "https://www.onic.org.co/",
} satisfies Person;
