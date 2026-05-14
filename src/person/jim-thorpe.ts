import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "jim-thorpe",
  fullName: "Jim Thorpe",
  dateOfBirth: new Date("1887-05-28T00:00:00.000Z"),
  pronouns: "he/him",
  bio: 'Jim Thorpe is widely considered one of the greatest athletes in history, excelling in multiple sports during the early 20th century. A member of the Sac and Fox Nation, Thorpe attended the Carlisle Indian Industrial School where he first gained national attention for his athletic abilities. At the 1912 Stockholm Olympics, he won gold medals in both the pentathlon and decathlon, leading King Gustav V of Sweden to declare him "the world\'s greatest athlete." Thorpe went on to play professional football and baseball, helping establish the National Football League and proving that Indigenous athletes could compete at the highest levels in any sport.',
  email: "jim.thorpe@olympic.test",
  phone: "+1-555-0129",
  picture: "https://upload.wikimedia.org/wikipedia/commons/6/64/Jim_Thorpe_1913b-cr.jpg",
  tags: ["Sac-Fox", "Olympics", "Athlete", "Football", "Baseball"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Jim_Thorpe",
  address: {
    street: "2929 Test Street",
    city: "Shawnee",
    state: "Oklahoma",
    country: "United States",
    zipCode: "74801",
  },
  quote: "I never passed up a chance to play baseball.",
  quoteReference: "https://en.wikipedia.org/wiki/Jim_Thorpe",
} satisfies Person;
