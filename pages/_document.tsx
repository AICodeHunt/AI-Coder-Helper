import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
		{/* Add the Google Analytics script tags here */}
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q03Q3VY7RV"></script>
		<script
		  dangerouslySetInnerHTML={{
			__html: `
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());
			  gtag('config', 'G-Q03Q3VY7RV');
			`,
		  }}
		/>
		{/* baidu analytics */}
		<script src="/baidu-analytics.js" />
		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3672455877501055"
		     crossOrigin="anonymous"></script>
			 
		{/* Additional scripts you want to add */}
		<script async src="https://fundingchoicesmessages.google.com/i/pub-3672455877501055?ers=1" nonce="5dJWzABNlyJqOhVUEimMVQ"></script>
		<script nonce="5dJWzABNlyJqOhVUEimMVQ">
		    {`
		      (function() {
		        function signalGooglefcPresent() {
		          if (!window.frames['googlefcPresent']) {
		            if (document.body) {
		              const iframe = document.createElement('iframe');
		              iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
		              iframe.style.display = 'none';
		              iframe.name = 'googlefcPresent';
		              document.body.appendChild(iframe);
		            } else {
		              setTimeout(signalGooglefcPresent, 0);
		            }
		          }
		        }
		        signalGooglefcPresent();
		      })();
		    `}
		</script>
	  </Head>
      <body className="bg-[#0E1117]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
