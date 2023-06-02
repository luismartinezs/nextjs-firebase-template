import { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import { firebaseConfig } from "@/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";

import { auth } from "@/firebase/auth";

export const useAuth = () => {
  const firebaseApp = firebase.initializeApp(firebaseConfig);

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
  }, [firebaseApp]);

  return { user };
};
