import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "ira-hayes",
  fullName: "Ira Hayes",
  dateOfBirth: new Date("1923-01-12T00:00:00.000Z"),
  pronouns: "he/him",
  bio: "Ira Hayes became an American icon as one of the six Marines who raised the flag at Iwo Jima during World War II, immortalized in the famous photograph by Joe Rosenthal. A Pima Marine from Arizona, Hayes served with distinction in the Pacific Theater, participating in some of the war's bloodiest battles. Despite his hero status, Hayes struggled with the contradictions of fighting for a country that had historically oppressed Indigenous peoples, and he battled alcoholism and poverty after the war. His story highlights both the patriotic service of Native Americans in the military and the ongoing challenges they faced in achieving equality at home.",
  email: "ira.hayes@marines.test",
  phone: "+1-555-0130",
  picture: "https://upload.wikimedia.org/wikipedia/commons/7/76/Ira_Hayes.jpg",
  tags: ["Pima", "Marine", "Iwo-Jima", "World-War-II"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Ira_Hayes",
  address: {
    street: "3030 Test Street",
    city: "Sacaton",
    state: "Arizona",
    country: "United States",
    zipCode: "85147",
  },
  quote:
    "I was sick. I guess I was about to crack up thinking about all my good buddies. They were better men than me and they're not coming back.",
  quoteReference: "https://en.wikipedia.org/wiki/Ira_Hayes",
} satisfies Person;
