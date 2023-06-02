import firebase_app from "../config";
import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";

const auth = getAuth(firebase_app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const googleSignUp = () => signInWithRedirect(auth, googleProvider);