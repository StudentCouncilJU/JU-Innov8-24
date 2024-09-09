import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
     
      <link rel="icon" type="favicon" href="innov8 logo.png"/>
        </Head>
      <body className='absolute md:relative' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
