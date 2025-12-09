import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "../components/header";
import MainBox from "../components/mainBox";



//font imports, change later
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cassandra Franck",
  description: "personal website for portfolio and blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        <MainBox> 
        {children}
        </MainBox>
        <footer>
          <p>© 2025 Cassandra Franck made this :3 </p>
        </footer>
      </body>
    </html>
  );
}
