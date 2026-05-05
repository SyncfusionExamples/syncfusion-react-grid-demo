import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'
import './grid.css'

export const metadata: Metadata = {
  title: 'Syncfusion React Grid Demo - Microsoft Webinar',
  description: 'Comprehensive demo showcasing Syncfusion React Grid features including data binding, filtering, sorting, editing, and performance optimization.',
  keywords: 'React Grid, Syncfusion, Data Binding, Filtering, Sorting, Editing',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          {children}
        </main>
      </body>
    </html>
  )
}
