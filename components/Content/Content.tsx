"use client";

import Navbar from "@/components/Navbar";
import { Container, Flex } from "@chakra-ui/react";

const Content = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container as="main" p={6} minH="100vh" maxW="container.md">
        {children}
      </Container>
    </>
  );
};

export default Content;
