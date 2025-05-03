import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Web World Records",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col font-['Montserrat']">
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
