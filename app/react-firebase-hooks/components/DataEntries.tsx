"use client";

import { Alert, Heading, Spinner } from "@chakra-ui/react";

import { DataEntry } from "@/components/DataEntry";
import { useDataEntries } from "@/app/react-firebase-hooks/hooks/dataEntries";

export const DataEntries = () => {
  const [value, loading, error] = useDataEntries();

  return (
    <>
      <Heading as="h1" fontSize="lg">
        Data entries
      </Heading>
      {loading && <Spinner />}
      {error && <Alert status="error">Error: {error.message}</Alert>}
      {value?.docs?.map((doc) => (
        <DataEntry entry={doc.data()} key={doc.id} />
      ))}
    </>
  );
};
