import { DocumentData } from "firebase/firestore";

import { FirestoreDocument } from "@/firebase/firestore/api";
import { Card } from "@chakra-ui/react";

export const DataEntry = ({
  entry,
}: {
  entry: FirestoreDocument<DocumentData>;
}) => {
  return (
    <Card p={3} m={1}>
      {Object.entries(entry.data).map(([key, value]) => (
        <div key={key}>
          <p>
            {key}: {JSON.stringify(value)}
          </p>
        </div>
      ))}
    </Card>
  );
};
