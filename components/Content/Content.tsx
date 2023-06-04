"use client";

import Navbar from "@/components/Navbar";
import { Flex } from "@chakra-ui/react";

const Content = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Flex
        as="main"
        direction="column"
        justify="space-between"
        align="center"
        p={6}
        minH="100vh"
      >
        {children}
      </Flex>
    </>
  );
};

export default Content;
