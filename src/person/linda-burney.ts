import type { Person } from "@mosaic-code/test-data-factory";

export default {
  id: "linda-burney",
  fullName: "Linda Burney",
  dateOfBirth: new Date("1957-04-25T00:00:00.000Z"),
  pronouns: "she/her",
  bio: "Linda Burney blazed trails through Australian parliaments as the first person identifying as Aboriginal to serve in the New South Wales Parliament and later as the first Aboriginal woman in the House of Representatives. This Wiradjuri educator turned politician carried her clan and personal totems into Parliament House, wearing a kangaroo skin cloak that announced her identity to a chamber that had long excluded her people. Her ministerial role overseeing Indigenous affairs allowed her to shape policy affecting her communities from the highest levels of government. Burney demonstrated that Indigenous women belonged in the halls of power, opening doors that had been closed for over a century.",
  email: "linda.burney@parliament.test",
  phone: "+61-555-0146",
  picture: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Linda_Burney.jpg",
  tags: ["Wiradjuri", "Parliament", "Education", "Minister"],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Linda_Burney",
  address: {
    street: "987 Test Street",
    city: "Canberra",
    state: "Australian Capital Territory",
    country: "Australia",
    zipCode: "2600",
  },
  quote: "As a woman and a mother, I know how to stand up and fight for equity.",
  quoteReference: "https://en.wikipedia.org/wiki/Linda_Burney",
} satisfies Person;
