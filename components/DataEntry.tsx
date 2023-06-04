import { Box, Card, Text } from "@chakra-ui/react";

const Value = ({ value }: { value: any }) => {
  if (typeof value === "object") {
    return <Text as="pre">{JSON.stringify(value, null, 2)}</Text>;
  }
  return <Text as="span">{value}</Text>;
};

export const DataEntry = ({ entry }: { entry: Record<string, any> }) => {
  return (
    <Card p={3} my={1}>
      {Object.entries(entry).map(([key, value]) => (
        <Box key={key}>
          <Text>
            <Text as="span" color="gray.400">
              {key}:
            </Text>{" "}
            <Value value={value} />
          </Text>
        </Box>
      ))}
    </Card>
  );
};
