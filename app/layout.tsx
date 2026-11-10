import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FES Copilot Course',
  description: 'Practice workspace for GitHub Copilot course',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
