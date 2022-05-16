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
        <div className="bg-white dark:bg-gray-900 min-h-full layout-grid">
          <Header />
          <Content>
            <Component {...pageProps} />
          </Content>

          <div className="theme-button-wrap">
            <div className="theme-button-cell">
              <ThemeSwitch />
            </div>
          </div>
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
      <style jsx>{`
        .layout-grid {
          display: grid;
          grid-template-rows: 4rem 5rem auto;
        }

        .theme-button-wrap {
          display: table;
          width: 100%;
          text-align: right;
          cursor: pointer;
          z-index: 999;
          padding: 1rem;
        }

        .theme-button-cell {
          display: table-cell;
          vertical-align: bottom;
        }
      `}</style>
    </>
  );
}

export default App;
