import "reset-css";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/contentLayout.css";
import type { AppProps } from "next/app";

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
        <meta name="description" content="다이어트 중이지만 맛있는건 먹고싶어" />
        <meta name="keywords" content="다이어트 중이지만 맛있는건 먹고싶어" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="다먹어" />
        <meta property="og:site_name" content="다먹어" />
        <meta property="og:description" content="다이어트 중이자만 맛있는건 먹고싶을떈, 다먹어" />
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}`}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
