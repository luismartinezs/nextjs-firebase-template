"use client";

import { SignOut } from "@/app/firebase-only/components/SignOut";
import { SignUp } from "@/app/firebase-only/components/SignUp";
import { useAuth } from "@/app/firebase-only/hooks/useAuth";
import PageUi from "@/components/PageUi";
import Notification from "@/app/firebase-only/components/Notification";

export default function FirebaseOnly() {
  const { user } = useAuth();

  return (
    <PageUi user={user} signoutButton={<SignOut />} signupButton={<SignUp />}>
      <Notification />
    </PageUi>
  );
}
