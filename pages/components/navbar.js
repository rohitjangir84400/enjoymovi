import next from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const[open , setopen]=useState(false);
  const[active , setactive]=useState(false);

  return (
    <>
    <div>
      <div className="h-[4px] bg-gradient-to-r from-pink-500 to-violet-500"></div>
      <div className="flex justify-between items-center py-2 px-2 ">
        <div className="px-2 font-bold text-[30px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          <Link href="/">enjoymovi</Link>
        </div>
        <div className="md:flex hidden">
          <div className="px-3 py-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white rounded-lg"><Link href="/">Home</Link></div>
          <div className="px-3 py-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white rounded-lg"><Link href="/movies_page">Movies</Link></div>
          <div className="px-3 py-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white rounded-lg"><Link href="/tv_page">tv</Link></div>
          <div className="px-3 py-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white rounded-lg"><Link href="/celebs_page">Celebrities</Link></div>
          <div className="px-3 py-2 hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white rounded-lg">latest news</div>
        </div>
        <div className="flex items-center">
          <div className="px-4 hover:cursor-pointer" onClick={()=>setactive(!active)}>
            {active? 
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
           </svg>
           :
           
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
          }

          </div>
          <div className="md:hidden" onClick={()=>setopen(!open)}>
            {open?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        }
          </div>
        </div>
      </div>
      <div className="h-[4px] bg-gradient-to-r from-pink-500 to-violet-500"></div>
    </div>
    {open?
    <div className="absolute top-[68px] z-[100] md:hidden w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-b-3xl">
       <div className="px-6 py-3 "><Link href="/">Home</Link></div>
          <div className="px-6 py-3 "><Link href="/movies_page">Movies</Link></div>
          <div className="px-6 py-3 "><Link href="/tv_page">tv</Link></div>
          <div className="px-6 py-3 "><Link href="/celebs_page">Celebrities</Link></div>
          <div className="px-6 py-3 ">latest news</div>
    </div>
    :
    ''
    }
    {
      active?
      <div className="flex p-2">
        <form className="grow border">
                  <input type="text" id="last" name="last" placeholder="Enter movies & series title" className="px-2 py-3 w-full outline-0" />
                </form>
                <div className="bg-[#9352b3] px-2 py-3 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
      </div>
      :
      ''
    }
    </>

  );
}