import { Attributes } from "./attributes";

export const ATTRIBUTES: Attributes[] = [
  { id: 1, name: "Sarah Connor", isAdmin: true, constraint: "unique-0" },
  { id: 2, name: "Patty Smith", isAdmin: false, constraint: "not_null-1" },
  { id: 3, name: "Jimmy Hoffa", isAdmin: true, constraint: "min_length-2" },
  { id: 4, name: "Kanye West", isAdmin: false, constraint: "max_length-3" }
];
