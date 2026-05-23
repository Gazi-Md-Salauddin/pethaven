import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Shared/Navbar'
import Footer from '@/components/Shared/Footer'
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PetHaven",
  description: "Pet Adoption Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Navbar/>
        {children}
        <Footer/>
        <Toaster/>
        </body>
    </html>
  );
}
