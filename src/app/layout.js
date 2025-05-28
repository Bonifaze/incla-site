import { Inter } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import "./globals.css"; 
import HeaderFooterToggle from "@/components/headerFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weights: ["100", "200", "400"],
});

export const metadata = {
  title: "Institute of Consecrated Life in Africa",
  description: "INCLA",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${robotoSlab.className} antialiased`}>
        <HeaderFooterToggle>{children}</HeaderFooterToggle>
      </body>
    </html>
  );
}