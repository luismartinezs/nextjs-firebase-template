"use client";

import { Heading } from "@chakra-ui/react";

import api from "@/services/dataEntries/api";
import { useState } from "react";
import { useDataEntries } from "@/services/dataEntries/hooks";

export const DataEntries = () => {
  const { data } = useDataEntries();
  return (
    <>
      <Heading as="h1" fontSize="lg">
        Data entries
      </Heading>
      {data?.map((entry) => (
        <div key={entry.id}>
          <p>{entry.id}</p>
        </div>
      ))}
    </>
  );
};
