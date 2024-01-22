interface Power {
  id: number;
  name: string;
  desc?: string;
}

const powers: Power[] = [
  {
    id: 1,
    name: "flying",
    desc: "Money",
  },
  {
    id: 2,
    name: "teleporting",
    desc: "teleport from one place to another",
  },
  {
    id: 3,
    name: "super strength",
    desc: "lift a car",
  },
  {
    id: 4,
    name: "clairvoyance",
    desc: "see the future",
  },
  {
    id: 5,
    name: "mind reading",
    desc: "read other's mind",
  },
];

export default powers;