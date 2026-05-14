import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "dmitri-berezhkov",
  fullName: "Dmitri Berezhkov",
  dateOfBirth: new Date("1975-01-01T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Dmitri Berezhkov advocates for Nenets reindeer herders' rights in the Russian Arctic, where oil and gas development threatens traditional nomadic practices on the Yamal Peninsula. He documents how industrial development disrupts migration routes that Nenets families have used for centuries, forcing herders to adapt to shrinking territories and changing climate conditions. Berezhkov's work operating within Russia's restrictive political environment demonstrates the courage required for Indigenous activism under authoritarian governments. His advocacy focuses on preserving traditional knowledge and ensuring Nenets communities benefit from resource development on their territories.",
  email: "dmitri.berezhkov@nenetsrights.test",
  phone: "+7-555-0187",
  picture: null,
  tags: ["Nenets", "Reindeer-Herding", "Oil-Gas-Resistance", "Yamal-Peninsula", "Russia"],
  groupMemberships: [],
  address: {
    street: "234 Test Street",
    city: "Salekhard",
    state: "Yamalo-Nenets Autonomous Okrug",
    country: "Russia",
    zipCode: "629008",
  },
  quote: "The tundra feeds our reindeer and our reindeer feed our families. Without the land, we are nothing.",
  quoteReference: "https://www.iwgia.org/en/russia.html",
} satisfies Person;
