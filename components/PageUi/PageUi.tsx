import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PageUi = ({
  user,
  signoutButton,
  signupButton,
  createButton,
  data,
  children,
}: {
  user?: any;
  signoutButton?: JSX.Element;
  signupButton?: JSX.Element;
  createButton?: JSX.Element;
  data?: JSX.Element;
  children?: React.ReactNode;
}): JSX.Element => {
  return (
    <Box>
      {user ? (
        <>
          <Text>Hello {user.displayName || user.email}</Text>
          <Flex gap={2} py={2}>
            {signoutButton}
            {createButton}
          </Flex>
          {data}
        </>
      ) : (
        signupButton
      )}
      {children}
    </Box>
  );
};

export default PageUi;
