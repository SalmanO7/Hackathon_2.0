import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./pages/Footer";
import { CartProvider } from "@/context/Context";
import {
  ClerkProvider,
} from '@clerk/nextjs'


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

export const metadata: Metadata = {
  title: "General e commerce website",
  description: "Created by Muhammad Salman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <CartProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
          >
            {children}
            <Footer />
          </body>
        </html>
      </CartProvider>
    </ClerkProvider>
  );
}
