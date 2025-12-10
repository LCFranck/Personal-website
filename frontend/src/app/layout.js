import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "../components/Header";
import MainBox from "../components/MainBox";




export const metadata = {
  title: "Cassandra Franck",
  description: "personal website for portfolio and blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div> 
          {children}
        </div>
        <footer>
          <p>© 2025 Cassandra Franck made this :3 </p>
        </footer>
      </body>
    </html>
  );
}
