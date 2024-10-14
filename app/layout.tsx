import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { UserStoreProvider } from "@/providers/user-store-provider";
import Layout from "@/components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ariari",
  description: "Ariari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <UserStoreProvider>
          <Layout>{children}</Layout>
        </UserStoreProvider>
      </body>
    </html>
  );
}
