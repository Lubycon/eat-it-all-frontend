import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>다이어트 중이지만 맛있는건 먹고싶어</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta
          name="description"
          content="다이어트 중이지만 맛있는건 먹고싶어"
        />
        {/* <meta name="keywords" content="다이어트 중이지만 맛있는건 먹고싶어" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:url" content="service_url" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="다먹어" />
        <meta property="og:site_name" content="다먹어" />
        <meta
          property="og:description"
          content="다이어트 중이자만 맛있는건 먹고싶어"
        />
        <meta property="og:image" content="image_url" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
