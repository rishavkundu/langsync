import "./globals.css";
import "@radix-ui/themes/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nerval AI - Connect your team's data to your LLM applications",
  description:
    "A fully-managed service to sync your team's data to your LLM applications, keeping your data fresh while you focus on building your product.",
  metadataBase: new URL("https://app.nerval.org"),
  authors: [
    {
      name: "Rishav Kundu",
      url: "https://rishavkundu.com",
    },
  ],
  openGraph: {
    url: "https://app.nerval.org",
    description:
      "A fully-managed service to sync your team's data to your LLM applications, keeping your data fresh while you focus on building your product.",
    title: "Nerval AI - Connect your team's data to your LLM applications",
    type: "website",
    siteName: "Nerval AI",
    images: ["og.png"],
    locale: "en_US",
  },
  keywords: [
    "nerval ai",
    "company data llm",
    "llm sync data",
    "chatgpt enterprise",
    "llm etl",
    "databricks llm",
    "llm data sync",
    "retrieval augmented generation",
    "rag etl llm",
    "your data in chatgpt",
    "langchain sync apps",
    "llm notion integration",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Theme appearance={"light"} className={"h-full"}>
          {children}
        </Theme>
      </body>
    </html>
  );
}
