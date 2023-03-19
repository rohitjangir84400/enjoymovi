import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { HomeIcon, FilmIcon, TvIcon, SparklesIcon, BarsArrowUpIcon, Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeNavbarstyle = () => {
    if (window.scrollY >= 10) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }
  useEffect(() => {
    changeNavbarstyle();
    window.addEventListener("scroll", changeNavbarstyle);
  })
  const handleClick = () => {
    setOpen(!open);
  }

  // const activestyle={
  //   color:"red",
  //   background:'white',
  // }


  return (
    <>
      <div className={navbar ? " z-10 bg-[hsl(207,19%,11%)] fixed top-0 w-full transition duration-300 ease-in-out" : "w-full z-10 fixed top-0 bg-transparent"}>
        <div className="flex items-center justify-between text-white">
          <div className="hover:cursor-pointer flex-shrink">
            <Link className="" href="/">
              <div className="flex items-center">
                <div className="p-3"><FilmIcon className="h-12 w-12 fill-[#e2d703]" /></div>
                <div className="text-[30px] font-bold">Enjoymovi</div>
              </div>
            </Link>
          </div>
          <div className="md:flex py-3 text-center hidden">
            <div className="px-3">
              <Link href="/">
                Home
              </Link>
            </div>
            <div className="px-3">
              <Link href="/movies_page">
                Movies
              </Link>
            </div>
            <div className="px-3">
              <Link href="/tv_page">
                Tv
              </Link>
            </div>
            <div className="px-3">
              <Link href="/celebs_page">
                Stars
              </Link>
            </div>
            <div className="px-3">
              <Link href="/tranding_page">
                Tranding
              </Link>
            </div>
          </div>
          
          <div className="hidden p-3 gap-5 md:flex items-center">
          <div className="">
            <MagnifyingGlassIcon className="h-6 w-6 fill-white" />
          </div>
            <div className='border-2 border-[#e2d703] rounded-2xl inline-block py-2 px-5 bg-black'>Log in</div>
          </div>
          <div className="block md:hidden p-3" onClick={handleClick}>
            {!open?<Bars3Icon className="fill-white h-12 w-12" />:<XMarkIcon className="h-12 w-12 fill-white"/>}
          </div>

        </div>
        <div className={open ? "text-white p-3 bg-[hsl(207,19%,11%)]" : "hidden"}>
        <div className=" border border-[#e2d703] rounded-md p-2">
          <div className="py-1">
            <Link href="/">
              Home
            </Link>
          </div>
          <div className="h-[1px] bg-[#e2d703]"></div>
          <div className="py-1">
            <Link href="/movies_page">
              Movies
            </Link>
          </div>
          <div className="h-[1px] bg-[#e2d703]"></div>
          <div className="py-1">
            <Link href="/tv_page">
              Tv
            </Link>
          </div>
          <div className="h-[1px] bg-[#e2d703]"></div>
          <div className="py-1">
            <Link href="/celebs_page">
              Stars
            </Link>
          </div>
          <div className="h-[1px] bg-[#e2d703]"></div>
          <div className="py-1">
            <Link href="/tranding_page">
              Tranding
            </Link>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}





{/* <div className={Navbar?{activestyle}:"flex flex-wrap items-center justify-between  sticky top-0 z-10 bg-[#010d1a] border-b"}>
      <div className="flex-grow px-5 text-center md:text-left ">
        <div className="py-3 text-[40px] font-bold hover:text-white">
          <Link className="cursor-pointer" href="/">enjoymovi</Link>
        </div>
      </div>
      <div className="flex justify-evenly w-full px-10 py-3 md:max-w-xl text-center">
        <Link href="/">
          <div className="group w-12 sm:w-20 cursor-pointer hover:text-white">
            <HomeIcon className="h-6 w-6 group-hover:animate-bounce mx-auto" />
            <div className="group-hover:visible invisible ">Home</div>
          </div>
        </Link>
        <Link href="/movies_page">
          <div className="group w-12 sm:w-20 cursor-pointer hover:text-white">
            <FilmIcon className="h-6 w-6 group-hover:animate-bounce mx-auto" />
            <div className="group-hover:visible invisible ">Movies</div>
          </div>
        </Link>
        <Link href="/tv_page">
          <div className="group w-12 sm:w-20 cursor-pointer hover:text-white ">
            <TvIcon className="h-6 w-6 group-hover:animate-bounce mx-auto" />
            <div className="group-hover:visible invisible ">Tv</div>
          </div>
        </Link>
        <Link href="/celebs_page">
          <div className="group w-12 sm:w-20 cursor-pointer hover:text-white">
            <SparklesIcon className="h-6 w-6 group-hover:animate-bounce mx-auto" />
            <div className="group-hover:visible invisible ">Stars</div>
          </div>
        </Link>
        <Link href="/tranding_page">
          <div className="group w-12 sm:w-20 cursor-pointer hover:text-white">
            <BarsArrowUpIcon className="h-6 w-6 group-hover:animate-bounce mx-auto" />
            <div className="group-hover:visible invisible ">Tranding</div>
          </div>
        </Link>
      </div>
      rohit
    </div> */}

