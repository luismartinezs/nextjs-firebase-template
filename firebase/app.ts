import { getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { MessagePayload, getMessaging, getToken, onMessage } from "firebase/messaging";

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const emulate = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR !== undefined && process.env.NEXT_PUBLIC_FIREBASE_EMULATOR === 'true'

const auth = getAuth(app)
const db = getFirestore(app)
const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'BHh6Lv-rWQFHdDnhleIUVheS635vld8q5s6eToPWzu7u2acptS40j35_zS5gevN6EaG6epo4pSoh496_aEUSka4' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = async (handler: (payload: MessagePayload) => void) => {
  return onMessage(messaging, (payload) => {
    console.log("payload", payload)
    handler(payload);
  });
}


if (emulate) {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8080);
}

export default app;
export { app, auth, db }