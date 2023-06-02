import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import { auth } from ".";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const googleSignUp = () => signInWithRedirect(auth, googleProvider);