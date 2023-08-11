import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sandeep Banoula',
  description: 'Freelance Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${"bg-white text-black dark:bg-black dark:text-white"}`}>{children}</body>
    </html>
  )
}
