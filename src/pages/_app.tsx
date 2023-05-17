import "@/styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
const components = {
  // Add your custom components here
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
