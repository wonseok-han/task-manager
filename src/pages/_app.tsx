import "styles/globals.css";

import type { AppProps } from "next/app";
import Content from "~/components/layout/Content";
import Header from "~/components/layout/Header";
import Seo from "components/Seo";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "~/components/ThemeSwitch";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <ThemeProvider attribute="class">
        <div className="bg-white dark:bg-gray-700 min-h-full layout-grid min-w-full">
          <Header />
          <Content>
            <Component {...pageProps} />
          </Content>
        </div>

        <footer>
          <div className="theme-button-wrap">
            <ThemeSwitch />
          </div>
        </footer>
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
      <style jsx>{`
        .layout-grid {
          display: grid;
          grid-template-rows: 4rem 5rem auto;
        }

        .theme-button-wrap {
          position: fixed;
          left: 100%;
          transform: translate(-100%, -100%);
          padding: 1rem;
        }
      `}</style>
    </>
  );
}

export default App;
