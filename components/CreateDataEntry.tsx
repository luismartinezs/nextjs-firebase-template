"use client";

import { Button } from "@chakra-ui/react";

import { useCreateEntry } from "@/services/dataEntries/hooks";

export const CreateDataEntry = () => {
  const { mutate } = useCreateEntry();
  return <Button onClick={() => mutate()}>Create new Entry</Button>;
};
