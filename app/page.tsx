"use client";

import styles from "./page.module.css";

import { DataEntry } from "@/components/DataEntry";
import { SignUp } from "@/components/SignUp";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Box>
          <SignUp />
          <DataEntry />
        </Box>
      </div>
    </main>
  );
}
