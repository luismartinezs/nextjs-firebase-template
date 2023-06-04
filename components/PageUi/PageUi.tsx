import { Box, Flex, Text } from "@chakra-ui/react";

const PageUi = ({
  user,
  signoutButton,
  signupButton,
  createButton,
  data,
}: {
  user?: any;
  signoutButton?: JSX.Element;
  signupButton?: JSX.Element;
  createButton?: JSX.Element;
  data?: JSX.Element;
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
        [signupButton]
      )}
    </Box>
  );
};

export default PageUi;
