import next from "next";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { HomeIcon, FilmIcon, TvIcon, SparklesIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-between text-[#dde5ed] sticky top-0 z-10 bg-[#010d1a] border-b">
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
    </div>
  );
}

