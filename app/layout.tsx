/*
Mandatory root layout
There must be a file that defines the root layout at the top level of the app directory. This layout is applicable to all the routes in the app. In addition, the root layout must define the <html> and the <body> tags because Next.js doesn’t automatically add them.
*/

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quadra',
  description: 'Quadra is a Multi-Asset Multi-Exchange Portfolio Management & Execution Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
