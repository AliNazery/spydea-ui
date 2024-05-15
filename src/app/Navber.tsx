// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="flex items-center justify-between bg-beige p-5">
//       <div className="flex items-center">
//         <img src="/images/logo/" alt="Logo" className="mr-2" />
//         <h1 className="text-2xl font-bold">Sujdea</h1>
//       </div>
//       <div className="space-x-4">
//         <Link href="/home">
//           <p className="text-base hover:text-davy_grey-700">Home</p>
//         </Link>
//         <Link href="/about">
//           <p className="text-base hover:text-gray-700">About</p>
//         </Link>
//         <Link href="/blog">
//           <p className="text-base hover:text-gray-700">Blog</p>
//         </Link>
//         <Link href="/papers">
//           <p className="text-base hover:text-gray-700">Papers</p>
//         </Link>
//       </div>
//       <div className="space-x-2">
//         <button className="px-4 py-2 border border-black text-black hover:bg-gray-200">Login</button>
//         <button className="px-4 py-2 bg-black text-white hover:bg-gray-800">Get Started</button>
//       </div>
//     </nav>
//   );
// }


import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="p-4 bg-beige flex justify-between items-center">
      <div className='ml-2'>
        <Link href="/">
          <img src="../images/logo/logo-dark.png" alt="" />
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/">
          <p className="hover:underline">Home</p>
        </Link>
        <Link href="/about">
          <p className="hover:underline">About</p>
        </Link>
        <Link href="/blog">
          <p className="hover:underline">Blog</p>
        </Link>
        <Link href="/pages">
          <p className="hover:underline">Pages</p>
        </Link>
      </div>
      <div className="flex space-x-4">
        <button className="border-2 border-quaternary-500 text-black px-4 py-2 rounded hover:bg-blue-200">Login</button>
        <button className=" bg-black text-white px-4 py-2 rounded hover:bg-quaternary-700">Get Started</button>
      </div>
    </nav>
  )
}
