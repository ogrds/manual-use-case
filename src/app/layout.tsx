import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Manual Use Case Application",
  description: "Manual use case application by: Gabriel Silva",
  icons: "/images/logo.svg",
  openGraph: {
    type: "website",
    url: "https://manual.co",
    images: ["/images/banner.jpeg"],
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
