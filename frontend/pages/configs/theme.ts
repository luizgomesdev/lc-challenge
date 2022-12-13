import { extendTheme, ThemeConfig, Colors } from "@chakra-ui/react";

const colors: Colors = {
  teal: {
    300: "#449ec4",
    500: "#5BBFBA",
    800: "#436ac6",
  },
  green: {
    200: "#A4D4AE",
  },
  purple: {
    700: "#5F6CAF",
  },
  yellow: {
    100: "#E7F0C3",
  },
  orange: {
    300: "#F0CF85",
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, colors });
