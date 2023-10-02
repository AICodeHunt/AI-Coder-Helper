import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
		{/* Add the Google Analytics script tags here */}
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-0KQD9S8RFN"></script>
		<script
		  dangerouslySetInnerHTML={{
			__html: `
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());
			  gtag('config', 'G-0KQD9S8RFN');
			`,
		  }}
		/>
		{/* baidu analytics */}
		<script src="/baidu-analytics.js" />
	  </Head>
      <body className="bg-[#0E1117]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
