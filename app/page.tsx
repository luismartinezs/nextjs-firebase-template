"use client";

import { SignOut } from "@/components/SignOut";
import styles from "./page.module.css";

import { DataEntry } from "@/components/DataEntry";
import { SignUp } from "@/components/SignUp";
import { useAuth } from "@/hooks/useAuth";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  const { user } = useAuth();

  return (
    <main className={styles.main}>
      <div>
        <Box>
          {user ? (
            <>
              <Text>Hello {user.displayName || user.email}</Text>
              <SignOut />
            </>
          ) : (
            <SignUp />
          )}
          <DataEntry />
        </Box>
      </div>
    </main>
  );
}
