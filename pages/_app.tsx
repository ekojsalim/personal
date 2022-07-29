import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        titleTemplate="%s | Eko J. Salim"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://ekojs.com/",
          site_name: "Eko J. Salim",
        }}
        twitter={{
          handle: "@polydivisible",
          site: "@polydivisible",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
