import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { Button } from "@chakra-ui/react";

import { auth } from "@/firebase/app";

const Signout = () => {
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <Button onClick={signOut} isLoading={loading}>
      Sign out
    </Button>
  );
};

export default Signout;
