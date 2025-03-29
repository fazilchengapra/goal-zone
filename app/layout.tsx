import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./Sidebar"; // Adjust path as per your structure
import ReduxProvider from "./redux/ReduxProvider";
import Navbar from "./Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen `}
      >
        <ReduxProvider>
          <div className="flex min-h-screen w-full !bg-[#F6F6F4]">
            <Sidebar />
            <div className="flex flex-col flex-1 h-screen">
              <Navbar />
              <div className="flex-1 overflow-auto p-4">{children}</div>
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
