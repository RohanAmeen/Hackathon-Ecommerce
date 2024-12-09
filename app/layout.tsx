import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  title: "Hackathon Project",
  description: "Ecommerce App",
};

export default function RootLayout({children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body>
              <AnnouncementBar/>
              <Header/>
              {children}
            <Footer/>

            </body>

        </html>
  );
}
