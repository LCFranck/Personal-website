import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import Link from "next/link";
import Header from "../components/Header.jsx";
import MainBox from "../components/MainBox";
import Footer from "../components/Footer.jsx";


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
        <Footer/>
      </body>
    </html>
  );
}
