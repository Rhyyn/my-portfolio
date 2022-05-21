import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&display=swap"
            rel="stylesheet"
          />
          <link
            href="//db.onlinewebfonts.com/c/0801c08e5412f54e4b4e9ad146d83a12?family=Ink+Free"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
