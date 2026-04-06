import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "@/Redux/ReduxProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
// import ReduxProvider from "@/components/Redux/ReduxProvider";

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

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch("https://api.nexproto.io/api/v1/logo/get", {
      cache: "no-store",
    });
    const data = await res.json();
    const logoUrl = data?.data?.image;

    return {
      title: "Last Minute Gaming",
      description: "Gaming Dashboard - Manage and monitor everything in one place.",
      icons: {
        icon: logoUrl || "/favicon.ico",
      },
    };
  } catch (error) {
    return {
      title: "Last Minute Gaming",
      description: "Gaming Dashboard - Manage and monitor everything in one place.",
      icons: {
        icon: "/favicon.ico",
      },
    };
  }
}

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
      >
        <ReduxProvider>
          <div>
            <Navbar></Navbar>
          </div>
          {
            children
          }
          <div>
              <Footer></Footer>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
