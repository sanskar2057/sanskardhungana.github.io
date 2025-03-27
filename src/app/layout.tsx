import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout"; // Adjust path as needed

// Import and configure Fira Code font
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Sanskar",
  description: "Portfolio of Sanskar Dhungana, a dynamic IT professional",
  icons: {
    icon: "/logo.ico", // Reference the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}