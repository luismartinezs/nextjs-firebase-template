https://sourcegraph.com/github.com/MoralisWeb3/youtube-tutorials/-/tree/moralis-amazon-clone (my 1st impression is that this is not great code)

Rough pseudocode:

FirebaseInitializer -> context provider
useEffect(initializeFirebase)
  firebaseContext.Provider value={firebase}

initializeFirebase() {
  app = initializeApp(config)
  auth
  await auth.setPersistence(browserSessionPersistence); (?)
  connect emulators
  morailes auth (https://docs.moralis.io/) (to use web3 to signin)
  ...
  return {app, auth, ...}
}

_app

<FirebaseInitializer
  initializing={() => <AppLoading />}
  initialized={() => <Component {...pageProps} />}
/>

then in any component:
const { auth, ... } = useFirebase();

https://sourcegraph.com/github.com/shadeemerhi/reddit-clone-yt

fierbase/client

app = initializeApp(config)
auth = ...
firestore = ...
export {app, auth, firestore} -> these are directly imported into components and used in hooks

firebase/authFunctions

import {auth} ...
...
export {signInWithGoogle, ...}

in components:
import react-firebase-hooks/auth -> d not use this as it is not updated regularly
import {auth, firestore}
import { doc, updateDoc } from "firebase/firestore";

const [user, error] = useAuthState(auth);

const hadnleSomething = () => {
  await updateDoc(doc(firestore,...)); -> gets document and updates it in same line, I mean... it's rather simple so maybe it's ok
}


https://github.com/csfrequency/react-firebase-hooks -> I can just copy this one (or fork it?), or maybe I should just use this


https://sourcegraph.com/github.com/SashenJayathilaka/TIK-TOK-Clone -> not great code, not DRY, but good stuff in there

pages/auth/signin.js

import { auth } from "../../firebase/firebase";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

Comp
  const [user] = useAuthState(auth);
  const [...] = useSignInWithGoogle(auth);

    useEffect(() => {
      if (user) {
        router.push("/");
      } else return;
    }, [user]);

firebase/firebase.js -> same as previous one, just initialize things and export app, auth, firestore...

components/Post.js

import { auth, firestore } from "../firebase/firebase";

Comp
  doThing
    await addDoc(collection(firestore, "posts", id, "comments"), {...})

  useEffect(
    () =>
      onSnapshot(collection(firestore, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs) -> hmm... ok so this is how to reactively update data based on updates on the db. This is actually better than using react-query and query invalidation since it will update the data regardless of what updated it. It's basically a subscription to changes on the db
      ),
    [firestore, id]
  );


https://sourcegraph.com/github.com/mcapodici/firestarter

Intersting folder structure:

- nextjs -> has its own package.json (root doesnt)
  - __tests__
  - src
    - auth
      - useAuthState (does not use firebase hooks lib)
    - backend: exposes a series of functions to interact with firebase
    - common
    - components
    - context: used for toasts, backend, user, and authLoading
    - firebase: config and init, exports app, auth and firestore
      - config
      - init
      - errorCodes
    - pages
      - _app: useEffect(initFirebase,[]); useAuthState()
    - styles
- firebase: firebase project files (firebase.json, firestore.rules, etc), has its own package.json

nextjs/src/components/LoginForm.tsx

Comp
  const { backend } = useContext(Context);
  onSubmit
    backend.login(...)


https://sourcegraph.com/github.com/molly/web3-is-going-great -> this project is kind of messy

src/db/db.js: init firebase app, firestore and storage, also `import "firebase/auth";`... it's weird