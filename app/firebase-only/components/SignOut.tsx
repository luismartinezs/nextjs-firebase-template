import { Button } from "@chakra-ui/react";

import { signOut } from "@/app/firebase-only/lib/signout";

export const SignOut = () => {
  return <Button onClick={signOut}>Sign out</Button>;
};
