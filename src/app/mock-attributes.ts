import { Attributes } from "./attributes";

export const ATTRIBUTES: Attributes[] = [
  {
    id: 1,
    name: "Sarah Connor",
    isAdmin: true,
    type: "string-0",
    constraint: "unique-0"
  },
  {
    id: 2,
    name: "Patty Smith",
    isAdmin: false,
    type: "float-1",
    constraint: "not_null-1"
  },
  {
    id: 3,
    name: "Jimmy Hoffa",
    isAdmin: true,
    type: "integer-2",
    constraint: "min_length-2"
  },
  {
    id: 4,
    name: "Kanye West",
    isAdmin: false,
    type: "boolean-3",
    constraint: "max_length-3"
  }
];
