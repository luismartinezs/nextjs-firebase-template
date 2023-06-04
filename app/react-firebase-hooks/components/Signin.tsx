import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Button } from "@chakra-ui/react";

import { auth } from "@/firebase/app";

const Signin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Button onClick={() => signInWithGoogle()} isLoading={loading}>
      Google sign in
    </Button>
  );
};

export default Signin;
