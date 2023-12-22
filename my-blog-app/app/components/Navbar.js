import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link href="/" className="text-white mr-4"> Home
        
        </Link>
        <Link href="/create" className="text-white">
        Create Post
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
