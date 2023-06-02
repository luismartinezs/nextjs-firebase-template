"use client";

import { googleSignUp } from "@/firebase/auth/signup";
import { Button } from "@chakra-ui/react";

export const SignUp = () => {
  return <Button onClick={googleSignUp}>Sign in with google</Button>;
};
