import Script from "next/script";

const MEASUREMENT_ID = process.env.MEASUREMENT_ID;

export default function Home() {
    return (
        <div>
            <h1>Nextjs google analytics 4</h1>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
            />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${MEASUREMENT_ID});
        `}
            </Script>
        </div>
    );
}
