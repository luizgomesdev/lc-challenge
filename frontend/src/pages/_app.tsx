import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "../configs/theme";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import { store } from "../store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Navbar />
        <SideBar>
          <Component {...pageProps} />
        </SideBar>
      </ChakraProvider>
    </Provider>
  );
}
