import { getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";

let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;
export {
  firebaseApp
}