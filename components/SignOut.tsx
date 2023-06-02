import { Button } from "@chakra-ui/react";

import { signOut } from "@/firebase/auth/signout";

export const SignOut = () => {
  return <Button onClick={signOut}>Sign out</Button>;
};
