import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "vine-deloria-jr",
  fullName: "Vine Deloria Jr.",
  dateOfBirth: new Date("1933-03-26T00:00:00.000Z"),
  pronouns: "he/him",
  bio: 'Vine Deloria Jr. revolutionized Indigenous scholarship and challenged American assumptions about Native peoples through his groundbreaking writings. A Standing Rock Sioux author and activist, his 1969 book "Custer Died for Your Sins" used sharp wit and incisive analysis to expose the absurdities of federal Indian policy and the romanticized stereotypes that obscured the reality of Indigenous experiences. Deloria combined legal expertise with traditional Indigenous knowledge, helping establish Native American studies as an academic discipline while advocating for tribal sovereignty and religious freedom. His prolific writing career produced over 20 books that fundamentally changed how Americans understand Indigenous history and contemporary issues.',
  email: "vine.deloria@colorado.test",
  phone: "+1-555-0124",
  picture: "https://upload.wikimedia.org/wikipedia/en/6/63/Vine_Deloria.jpg",
  tags: ["Standing-Rock-Sioux", "Author", "Scholar", "Custer-Died"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Vine_Deloria_Jr.",
  address: {
    street: "2525 Test Street",
    city: "Boulder",
    state: "Colorado",
    country: "United States",
    zipCode: "80309",
  },
  quote: "Custer died for your sins.",
  quoteReference: "https://en.wikipedia.org/wiki/Custer_Died_for_Your_Sins",
} satisfies Person;
