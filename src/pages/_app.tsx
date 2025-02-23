import "@/styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import Layout from "@/components/layout";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const pathName = usePathname();

  return pathName !== "/sign-in" ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
};

export default App;
