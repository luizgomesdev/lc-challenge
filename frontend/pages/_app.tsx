import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "./configs/theme";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <SideBar>
        <Component {...pageProps} />
      </SideBar>
    </ChakraProvider>
  );
}
