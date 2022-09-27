import next from "next";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="h-[4px] bg-gradient-to-r from-pink-500 to-violet-500"></div>
      <div className="flex justify-between items-center py-2 px-2 ">
        <div className="px-2 font-bold text-[30px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          <Link href="/">enjoymovi</Link>
        </div>
        <div className="md:flex hidden">
          <div className="px-3 py-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white rounded-lg"><Link href="/">Home</Link></div>
          <div className="px-3 py-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white rounded-lg"><Link href="/movies_page">Movies</Link></div>
          <div className="px-3 py-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white rounded-lg"><Link href="/tv_page">tv shows</Link></div>
          <div className="px-3 py-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white rounded-lg"><Link href="/celebs_page">Celebrities</Link></div>
          <div className="px-3 py-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white rounded-lg">latest news</div>
        </div>
        <div className="flex items-center">
          <div className="px-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </div>
          <div className="px-3 py-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-lg">login</div>
        </div>
      </div>
      <div className="h-[4px] bg-gradient-to-r from-pink-500 to-violet-500"></div>
    </>
  );
}