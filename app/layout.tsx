import type { Metadata } from "next";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

// Import komponen Anda
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import StyledComponentsRegistry from "./Registry"; // Import Registry Anda

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Praktikum Bab 10 - Landing Page", // Judul yang lebih baik
  description: "Project landing page menggunakan Next.js dan Bootstrap", // Deskripsi yang lebih baik
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <Navbar />
          <main>
            {children} 
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}