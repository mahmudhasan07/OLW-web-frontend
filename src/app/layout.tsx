import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


// export const metadata: Metadata = {
//   title: "Speak Life Hypnosis ",
//   description: "Expert consulting connecting healthcare innovation with strategic investment for clinics and private equity firms.",
//   icons: {
//     // icon: logo.src
//   }
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}
      >
        <div>
          <Navbar></Navbar>
        </div>
        {
          children
        }
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
