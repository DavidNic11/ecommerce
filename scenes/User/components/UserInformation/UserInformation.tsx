import type { User } from "@lib/users";
import { formatAddress } from "@lib/users";

interface UserInformationPropTypes {
  user: User;
}

export default function UserInformation({ user }: UserInformationPropTypes) {
  return (
    <div>
      <h1>
        {user.name.firstname} {user.name.lastname}
      </h1>
      <div>{user.email}</div>
      <div>{formatAddress(user.address)}</div>
    </div>
  );
}
