//"use client";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delivery Dashboard",
  description: "Delivery dashboard template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.children}>
        <Navbar />
        <div className="p-4 sm:ml-64">{children}</div>
      </body>
    </html>
  );
}
