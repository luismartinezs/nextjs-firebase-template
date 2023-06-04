"use client";

import { Button } from "@chakra-ui/react";

import { createDataEntry } from "@/app/react-firebase-hooks/lib/dataEntriesApi";

export const CreateDataEntry = () => {
  return <Button onClick={() => createDataEntry()}>Create new Entry</Button>;
};
