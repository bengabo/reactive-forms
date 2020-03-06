import { Attributes } from "./attributes";

export const ATTRIBUTES: Attributes[] = [
  { id: 1, name: "Sarah Connor", isAdmin: true, constraint: "unique" },
  { id: 2, name: "Patty Smith", isAdmin: false, constraint: "not null" },
  { id: 3, name: "Jimmy Hoffa", isAdmin: true, constraint: "min length" },
  { id: 4, name: "Kanye West", isAdmin: false, constraint: "max length" }
];
