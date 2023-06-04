"use client";

import { googleSignUp } from "@/app/firebase-only/lib/signup";
import { Button } from "@chakra-ui/react";

export const SignUp = () => {
  return <Button onClick={googleSignUp}>Sign in with google</Button>;
};
