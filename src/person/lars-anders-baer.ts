import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "lars-anders-baer",
  fullName: "Lars-Anders Baer",
  dateOfBirth: new Date("1955-03-12T00:00:00.000Z"),
  pronouns: "he/him",
  bio: 'Lars-Anders Baer has spent decades fighting what he calls "windmill colonialism," challenging Sweden\'s failure to properly consult Sami communities about industrial development affecting their traditional reindeer herding territories. This former president of the Swedish Sami Parliament and current vice-president of the Saami Council represents the 80,000 Sami people scattered across Norway, Sweden, Finland, and Russia in their ongoing struggle for land rights and cultural preservation. His leadership of the Union of Saami People in Sweden has focused on protecting reindeer migration routes from mining, wind farms, and other development projects that threaten traditional livelihoods. Baer argues that Sweden must confront its colonial past and recognize Sami rights to their ancestral lands, just as other settler states have been forced to acknowledge Indigenous sovereignty.',
  email: "lars.baer@saamicouncil.test",
  phone: "+46-555-0155",
  picture: null,
  tags: ["Sami", "Reindeer-Herding", "Parliament", "Sweden", "Land-Rights"],
  groupMemberships: ["saami-council", "swedish-sami-parliament", "union-saami-people-sweden"],
  address: {
    street: "999 Test Street",
    city: "Jokkmokk",
    state: "Norrbotten",
    country: "Sweden",
    zipCode: "962 31",
  },
  quote: "The problem is that Sweden hasn't come to terms with its colonial past.",
  quoteReference: "https://en.wikipedia.org/wiki/Saami_Council",
} satisfies Person;
