import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pride🌈✨',
  description: 'Step into a realm where empowerment, fabulousness, and financial freedom intersect. $Pride Token is here to celebrate the LGBTQ+ community and ignite the rainbow revolution! Are you ready to join the most fabulous movement in the crypto sphere? Let us dive in!',
  icon:'/LGBTQ.png'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
