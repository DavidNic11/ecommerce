import { User } from "./types";

export function getUser(): Promise<User> {
  return fetch("https://fakestoreapi.com/users/1").then((res) => res.json());
}
