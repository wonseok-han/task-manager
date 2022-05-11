import "styles/globals.css";

import type { AppProps } from "next/app";
import Seo from "components/Seo";
import ThemeButton from "~/components/ThemeButton";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <ThemeProvider attribute="class">
        <ThemeButton />
        <div className="bg-white dark:bg-gray-900">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>

      <style jsx global>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default App;
