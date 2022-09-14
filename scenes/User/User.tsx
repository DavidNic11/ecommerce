import Image from "next/image";
import styles from "./User.module.css";
import { getUser } from "@lib/users";
import UserInformation from "./components/UserInformation";
import { useEffect, useState } from "react";
import type { User as UserType } from "@lib/users";

const useUser = () => {
  const [user, setUser] = useState<UserType>();
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    getUser()
      .then((res) => {
        if (isMounted) setUser(res);
      })
      .catch(() => {
        setFetchError(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { isError: fetchError, user };
};

const User = () => {
  const { isError, user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user</div>;
  }

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
