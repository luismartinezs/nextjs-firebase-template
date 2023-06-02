"use client";

import { useEffect } from "react";

import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";

export const AuthGoogleSignIn = ({ auth }) => {
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
