import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Sidebar from "@/components/adminComponent/layout/sideBar";
import Header from "@/components/adminComponent/layout/Header";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin Dashboard",
  description: "Hotel Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-slate-100 antialiased">
        <div className="flex min-h-screen">
          <Sidebar />

          <div className="flex flex-1 flex-col min-w-0">
            <Header />

            <main className="flex-1 overflow-x-hidden p-4 sm:p-6">
              {children}
            </main>
          </div>
        </div>

        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}