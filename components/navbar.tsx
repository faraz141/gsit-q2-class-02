import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between sticky top-0 p-4 z-[1000] h-20   bg-black dark:bg-blue-800 ">
        <Link
          href={'/'}
          className="font-bold m-6 text-xl text-white hover:text-red-600"
        >
          Faraz Website
        </Link>
        <ul className="flex m-0 p-0 gap-4 ">
          <li>
            <Link
              href={'/'}
              className="block text-white no-underline p-2 px-4 mx-2 rounded-md transition-colors duration-300 hover:bg-red-600 hover:text-black hover:font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/about'}
              className="block text-white no-underline p-2 px-4 mx-2 rounded-md transition-colors duration-300 hover:bg-red-600 hover:text-black hover:font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={'/contact'}
              className="block text-white no-underline p-2 px-4 mx-2 rounded-md transition-colors duration-300 hover:bg-red-600 hover:text-black hover:font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
