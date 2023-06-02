// firebaseui is not compatible with firebase v9
"use client";

import { useEffect, useState } from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";
import { Text } from "@chakra-ui/react";

import { firebaseConfig } from "@/firebase/config";

export const useCompatAuth = () => {
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
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

export const AuthCompatGoogleSignIn = ({
  auth,
}: {
  auth: firebase.auth.Auth;
}) => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
      ],
      signInSuccessUrl: "/",
    });
  }, []);

  return (
    <>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </>
  );
};

export const AuthCompatUser = () => {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const { user } = useCompatAuth();

  if (user) {
    return <Text>Welcome {user.email}</Text>;
  }

  return <AuthCompatGoogleSignIn auth={firebaseApp.auth()} />;
};
