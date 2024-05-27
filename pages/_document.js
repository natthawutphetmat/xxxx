import Document, { Html, Head, Main, NextScript } from 'next/document';
import Pixcelfb from './fb';

class MyDocument extends Document {
  render() {
    return (
      <Html>
         <Head>
   
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
