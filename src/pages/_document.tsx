import { FC } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
