import "@/styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import Layout from "@/components/layout";
import InitialState from "@/redux/initial/intial";
import Providers from "@/redux/provider";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const pathName = usePathname();

  return (
    <Providers>
      {pathName !== "/sign-in" ? (
        <Layout>
          <InitialState />
          <Component {...pageProps} />
        </Layout>
      ) : (
        <>
          <InitialState />
          <Component {...pageProps} />
        </>
      )}
    </Providers>
  );
};

export default App;
