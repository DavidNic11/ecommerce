import type { Address } from "./types";

export function formatAddress(unformattedAddress: Address) {
  return `${unformattedAddress.street} ${unformattedAddress.city}, ${unformattedAddress.zipcode}`;
}
