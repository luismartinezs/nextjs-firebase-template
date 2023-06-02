"use client";

import { ColorModeScript } from "@chakra-ui/react";

import { theme } from "@/lib/theme";

export const ColorMode = () => {
  return <ColorModeScript initialColorMode={theme.config.initialColorMode} />;
};
