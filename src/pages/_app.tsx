import "@/styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
