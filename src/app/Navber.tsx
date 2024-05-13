import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-beige p-5">
      <div className="flex items-center">
        <img src="/images/logo/" alt="Logo" className="mr-2" />
        <h1 className="text-2xl font-bold">Sujdea</h1>
      </div>
      <div className="space-x-4">
        <Link href="/home">
          <p className="text-base hover:text-davy_grey-700">Home</p>
        </Link>
        <Link href="/about">
          <p className="text-base hover:text-gray-700">About</p>
        </Link>
        <Link href="/blog">
          <p className="text-base hover:text-gray-700">Blog</p>
        </Link>
        <Link href="/papers">
          <p className="text-base hover:text-gray-700">Papers</p>
        </Link>
      </div>
      <div className="space-x-2">
        <button className="px-4 py-2 border border-black text-black hover:bg-gray-200">Login</button>
        <button className="px-4 py-2 bg-black text-white hover:bg-gray-800">Get Started</button>
      </div>
    </nav>
  );
}
