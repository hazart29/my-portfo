import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DevelopmentAlert from "./components/alert/DevelopmentAlert";
import MyStatsig from "./my-statsig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Munir Portfolio",
  description: "Misbakhul Munir's Portfolio Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden max-h-screen bg-gray-800`}
      >
        <div aria-hidden className="bg-gradient-to-br from-gray-800 via-gray-900 to-green-900 min-h-screen flex flex-col px-8">
          <DevelopmentAlert />
          <Header />
          <main className="container rounded-md flex-grow flex items-center justify-center px-20">
            <MyStatsig>
              {children}
            </MyStatsig>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
