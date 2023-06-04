import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <Flex as="nav" p={4} gap={4} justify="center">
      <Link as={NextLink} href="/">
        Home
      </Link>
      <Link as={NextLink} href="/firebase-only">
        Firebase Only
      </Link>
      <Link as={NextLink} href="/react-firebase-hooks">
        React Firebase Hooks
      </Link>
      <Link as={NextLink} href="/react-query">
        React Query
      </Link>
    </Flex>
  );
};

export default Navbar;
