// import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '컨설토랑 2.0',
  description: '요식업 사장님을 위한 컨설팅 솔루션',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* <link rel="icon" href="/logo.png" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" /> */}
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`} // <- 네 GA ID로 변경
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script> */}
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
