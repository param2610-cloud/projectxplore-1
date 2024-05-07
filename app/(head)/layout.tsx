import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import useUser from "@/hooks/useUser";
import STATES from "@/lib/utils/constants";
import MainLayoutPage from "./mainLayoutPage";
import { useRouter } from "next/navigation";



const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} p-0 m-0 w-screen overflow-x-hidden`}>
        <MainLayoutPage>
          {children}
        </MainLayoutPage>
      </body>
    </html>
  );
}
