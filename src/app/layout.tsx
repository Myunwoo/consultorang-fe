'use client'

import { Provider as JotaiProvider } from 'jotai'
import { jotaiStore } from '@/lib/jotaiClient'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-black">
        <JotaiProvider store={jotaiStore}>
          {children}
        </JotaiProvider>
      </body>
    </html>
  )
}
