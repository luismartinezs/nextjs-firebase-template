"use client";

import { Heading } from "@chakra-ui/react";

import api from "@/services/dataEntries/api";
import { useState } from "react";
import { useDataEntries } from "@/services/dataEntries/hooks";
import { DataEntry } from "./DataEntry";

export const DataEntries = () => {
  const { data } = useDataEntries();
  return (
    <>
      <Heading as="h1" fontSize="lg">
        Data entries
      </Heading>
      {data?.map((entry) => (
        <DataEntry entry={entry} key={entry.id} />
      ))}
    </>
  );
};
