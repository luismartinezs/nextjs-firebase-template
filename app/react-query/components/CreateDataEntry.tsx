"use client";

import { Button } from "@chakra-ui/react";

import { useCreateEntry } from "@/app/react-query/hooks/dataEntries";

export const CreateDataEntry = () => {
  const { mutate } = useCreateEntry();
  return <Button onClick={() => mutate()}>Create new Entry</Button>;
};
