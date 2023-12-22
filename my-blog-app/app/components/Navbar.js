"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
//Navbar component
const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-blue-400 mr-4" : "text-white mr-4"
          }`}
        >
          {" "}
          Home
        </Link>
        <Link
          href="/create"
          className={`${
            pathname === "/create" ? "text-blue-400" : "text-white"
          }`}
        >
          Create Post
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
