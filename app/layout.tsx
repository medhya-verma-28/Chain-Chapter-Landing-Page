import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Poppins } from "next/font/google"
import { Suspense } from "react" // import Suspense from react (not next/navigation)
import "./globals.css"
import FloatingChains from "@/components/floating-chains"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`antialiased ${poppins.variable}`}>
      <body className="relative bg-black text-white">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="pointer-events-none fixed inset-0 z-10">
            <FloatingChains />
          </div>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
