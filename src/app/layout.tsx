import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";


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
  title: "Solar Smart Energy",
  description: "ToD/ToU based platform for solar renewable energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
    <html lang="en">
      <body>
          <div id="root">{children}</div>
      </body>
    </html>
    </ClerkProvider>
  );
}
