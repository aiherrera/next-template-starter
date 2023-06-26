import { Inter } from 'next/font/google'

// import localFont from 'next/font/local'
import { AppTitle } from '@/constants/global'

import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// example of loading multiple weights of a font
// const someFont = localFont({
//   src: [
//     {
//       path: '../../public/fonts/some-font-Medium.woff2',
//       weight: '500',
//     },
//     {
//       path: '../../public/fonts/some-font-Bold.woff2',
//       weight: '700',
//     },
//     {
//       path: '../../public/fonts/some-font-Extrabold.woff2',
//       weight: '800',
//     },
//   ],
//   variable: '--font-name',
//   display: 'swap',
// })

export const metadata = {
  title: `${AppTitle}`,
  description: 'A Next.js starter styled with Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-inter bg-white tracking-tight text-gray-800 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden">{children}</div>
      </body>
    </html>
  )
}
