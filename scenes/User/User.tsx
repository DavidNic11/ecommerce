import Image from "next/image";
import styles from "./User.module.css";
import { getUser, formatAddress } from "@lib/users";
import UserInformation from "./components/UserInformation";

const User = () => {
  const user = getUser();

  return (
    <div className={styles.container}>
      <UserInformation user={user} />

      <Image
        src="https://robohash.org/quamrerumenim.png?size=300x300&set=set1"
        height={300}
        width={300}
        alt="Profile Picture"
      />
    </div>
  );
};

export default User;
