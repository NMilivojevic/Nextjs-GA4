import Script from "next/script";
import type { AppProps } from "next/app";

const MEASUREMENT_ID = process.env.MEASUREMENT_ID;

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${MEASUREMENT_ID}');
            `}
            </Script>

            <Component {...pageProps} />
        </>
    );
};

export default App;
