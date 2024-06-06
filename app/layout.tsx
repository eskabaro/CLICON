import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Breadcrumb } from '@/components/breadcrumb'
import '../styles/global.scss'

const publicSans = Public_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
    title: 'Clicon',
    description: 'eCommerce-Marketplace'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={publicSans.className}>
                <div className='wrapper'>
                    <Header />
                    <Navbar />
                    <Breadcrumb />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
