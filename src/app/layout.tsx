import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Metazense - Agentic Vulnerability Management',
  description: 'We don\'t just tell you what\'s wrong. We actually fix it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
