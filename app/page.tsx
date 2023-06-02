"use client";

import styles from "./page.module.css";

import firebase from "firebase/compat/app";
import { DataEntry } from "@/components/DataEntry";
// import { SignUp } from "@/components/SignUp";
import { Box, Text } from "@chakra-ui/react";
import { AuthGoogleSignIn } from "@/components/AuthGoogle";
import { firebaseConfig } from "@/firebase/config";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    onAuthStateChanged(firebaseApp.auth(), (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        console.log("user is not signed in");
        setUser(null);
      }
    });
  }, [firebaseApp]);

  return (
    <main className={styles.main}>
      <div>
        <Box>
          {/* <SignUp /> */}
          {user ? (
            <Text>Welcome {user.email}</Text>
          ) : (
            <AuthGoogleSignIn auth={firebaseApp.auth()} />
          )}
          <DataEntry />
        </Box>
      </div>
    </main>
  );
}
