import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google'

/**
 * Route-level layout for the portfolio only.
 * Fonts are loaded here (a server component) so the client page can use
 * them through CSS variables without affecting the other course modules.
 */

const displayFont = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const bodyFont = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Joshua Kaufman — Front-end developer',
  description: 'Portfolio of Joshua Kaufman: client websites, web apps, and AI projects.',
}

const PortfolioLayout = ({ children }: { children: ReactNode }) => (
  <div className={`${displayFont.variable} ${bodyFont.variable} font-body antialiased`}>
    {children}
  </div>
)

export default PortfolioLayout
