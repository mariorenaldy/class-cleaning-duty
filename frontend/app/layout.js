import {Poppins} from "next/font/google";
import '../styles/globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400", "600", "700"]
})

export default function RootLayout({children}) {
    return (
        <html lang="id" className={poppins.className}>
            <body>{children}</body>
        </html>
    )
}