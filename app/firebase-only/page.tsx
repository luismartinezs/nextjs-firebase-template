"use client";

import { SignOut } from "@/app/firebase-only/components/SignOut";
import { SignUp } from "@/app/firebase-only/components/SignUp";
import { useAuth } from "@/app/firebase-only/hooks/useAuth";
import PageUi from "@/components/PageUi";

export default function FirebaseOnly() {
  const { user } = useAuth();

  return (
    <PageUi user={user} signoutButton={<SignOut />} signupButton={<SignUp />} />
  );
}
