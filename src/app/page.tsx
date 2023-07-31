import Script from "next/script";

const MEASUREMENT_ID = process.env.MEASUREMENT_ID;

export default function Home() {
    return (
        <div className="d-flex">
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
            <h1>Nextjs google analytics 4</h1>
        </div>
    );
}
