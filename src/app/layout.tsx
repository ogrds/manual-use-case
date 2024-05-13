import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Manual - Use Case Application",
  description: "Use case application for Manual by: Gabriel Silva",
  openGraph: {
    type: "website",
    url: "https://manual.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" sizes="any" />
      </head>
      <body className="bg-background">{children}</body>
    </html>
  );
}
