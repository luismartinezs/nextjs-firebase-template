import { useEffect, useState } from "react";

import { User, onAuthStateChanged } from "firebase/auth";

import { auth } from "@/firebase/app";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        console.log("user is not signed in");
        setUser(null);
      }
    });
  }, []);

  return { user };
};
