import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WriteWorks AI - AI-Powered Writing for Product Marketing",
  description: "WriteWorks AI empowers product marketing teams to create compelling content 70% faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
