"use client";

import { SignOut } from "@/app/firebase-only/components/SignOut";
import { DataEntries } from "@/app/react-query/components/DataEntries";
import { SignUp } from "@/app/firebase-only/components/SignUp";
import { useAuth } from "@/app/firebase-only/hooks/useAuth";
import { CreateDataEntry } from "@/app/react-query/components/CreateDataEntry";
import PageUi from "@/components/PageUi";

export default function ReactQuery() {
  const { user } = useAuth();

  return (
    <PageUi
      user={user}
      signoutButton={<SignOut />}
      signupButton={<SignUp />}
      createButton={<CreateDataEntry />}
      data={<DataEntries />}
    />
  );
}
