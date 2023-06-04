"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/app";

import PageUi from "@/components/PageUi";
import Signout from "@/app/react-firebase-hooks/components/Signout";
import Signin from "@/app/react-firebase-hooks/components/Signin";
import { CreateDataEntry } from "@/app/react-firebase-hooks/components/CreateDataEntry";
import { DataEntries } from "@/app/react-firebase-hooks/components/DataEntries";

export default function ReactFirebaseHooks() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <PageUi
      user={user}
      signoutButton={<Signout />}
      signupButton={<Signin />}
      createButton={<CreateDataEntry />}
      data={<DataEntries />}
    />
  );
}
