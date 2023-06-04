import { DocumentData } from "firebase/firestore";

import { FirestoreDocument } from "@/firebase/firestore/api";
import { Box, Card, Text } from "@chakra-ui/react";

export const DataEntry = ({
  entry,
}: {
  entry: FirestoreDocument<DocumentData>;
}) => {
  return (
    <Card p={3} my={1}>
      {Object.entries(entry.data).map(([key, value]) => (
        <Box key={key}>
          <Text>
            <Text as="span" color="gray.400">
              {key}:
            </Text>{" "}
            <Text as="pre">{JSON.stringify(value)}</Text>
          </Text>
        </Box>
      ))}
    </Card>
  );
};
