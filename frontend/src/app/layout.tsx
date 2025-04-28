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
      <body className="antialiased">
        <div className="min-h-screen flex flex-col font-['Montserrat']">
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
