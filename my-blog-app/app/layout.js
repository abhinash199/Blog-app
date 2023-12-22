import { Inter } from "next/font/google";
import "./globals.css";
//import Navbar component
import NavBar from "./components/Navbar";
//import Blog Provider context
import { BlogProvider } from "./context/BlogContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "This is the Landing Page which displays a list of blog posts with their titles and a short preview of the content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlogProvider>
          <NavBar />
          {children}
        </BlogProvider>
      </body>
    </html>
  );
}
