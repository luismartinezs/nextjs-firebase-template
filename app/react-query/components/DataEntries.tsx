"use client";

import { Heading } from "@chakra-ui/react";

import { useDataEntries } from "@/app/react-query/hooks/dataEntries";
import { DataEntry } from "@/components/DataEntry";

export const DataEntries = () => {
  const { data } = useDataEntries();
  return (
    <>
      <Heading as="h1" fontSize="lg">
        Data entries
      </Heading>
      {data?.map((entry) => (
        <DataEntry entry={entry.data} key={entry.id} />
      ))}
    </>
  );
};
