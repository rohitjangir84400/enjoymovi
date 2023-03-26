import Image from "next/image";
import Link from "next/link";
import { CalendarDaysIcon,ClockIcon,StarIcon } from "@heroicons/react/24/solid";

export default function Newssection() {
    return (
        <div style={{
            backgroundImage: `url('/images/footer-bg.jpg')`, backgroundPosition: "center", backgroundSize: "cover",
          }}>
            <div className="text-center">
            <div className="text-[#e2d703] py-3">ONLINE STREAMING</div>
            <div className="text-[46px] text-white mb-10">Top Rated Movies</div>
            </div>
            <div>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 text-white">
                    <div className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
                        <Link href='/movie_page'>
                            <div className="flex flex-col justify-center">
                                <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                                    <Image className=" rounded-md" src='/images/movie-4 (2).png' alt="failed to load"
                                        layout="fill" objectFit="cover" />
                                </div>
                                <div className="text-white">
                                    <div className="flex justify-between items-center gap-[5px] mb-3">
                                        <div className="w-[60%] font-bold hover:text-[#e2d703]">Free Guy</div>
                                        <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />2021</div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="border-2 py-1 px-2 text-[#e2d703]">
                                            4K
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />115 min</div>
                                            <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />7.7</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
                        <Link href='/movie_page'>
                            <div className="flex flex-col justify-center">
                                <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                                    <Image className=" rounded-md" src='/images/movie-3.png' alt="failed to load"
                                        layout="fill" objectFit="cover" />
                                </div>
                                <div className="text-white">
                                    <div className="flex justify-between items-center gap-[5px] mb-3">
                                        <div className="w-[60%] font-bold hover:text-[#e2d703]">The Adam Project</div>
                                        <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />2022</div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="border-2 py-1 px-2 text-[#e2d703]">
                                            HD
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />106 min</div>
                                            <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />7.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
                        <Link href='/movie_page'>
                            <div className="flex flex-col justify-center">
                                <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                                    <Image className=" rounded-md" src='/images/movie-1.png' alt="failed to load"
                                        layout="fill" objectFit="cover" />
                                </div>
                                <div className="text-white">
                                    <div className="flex justify-between items-center gap-[5px] mb-3">
                                        <div className="w-[60%] font-bold hover:text-[#e2d703]">Sonic the Hedgehog 2</div>
                                        <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />2022</div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="border-2 py-1 px-2 text-[#e2d703]">
                                            4K
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />122 min</div>
                                            <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />7.8</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
                        <Link href='/movie_page'>
                            <div className="flex flex-col justify-center">
                                <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                                    <Image className=" rounded-md" src='/images/movie-2.png' alt="failed to load"
                                        layout="fill" objectFit="cover" />
                                </div>
                                <div className="text-white">
                                    <div className="flex justify-between items-center gap-[5px] mb-3">
                                        <div className="w-[60%] font-bold hover:text-[#e2d703]">Morbius</div>
                                        <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />2022</div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="border-2 py-1 px-2 text-[#e2d703]">
                                            HD
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />104 min</div>
                                            <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />7.2</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
                        <Link href='/movie_page'>
                            <div className="flex flex-col justify-center">
                                <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                                    <Image className=" rounded-md" src='/images/movie-5.png' alt="failed to load"
                                        layout="fill" objectFit="cover" />
                                </div>
                                <div className="text-white">
                                    <div className="flex justify-between items-center gap-[5px] mb-3">
                                        <div className="w-[60%] font-bold hover:text-[#e2d703]">The Batman</div>
                                        <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />2022</div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="border-2 py-1 px-2 text-[#e2d703]">
                                            HD
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />176 min</div>
                                            <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />7.3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
                        <Link href='/movie_page'>
                            <div className="flex flex-col justify-center">
                                <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                                    <Image className=" rounded-md" src='/images/movie-6.png' alt="failed to load"
                                        layout="fill" objectFit="cover" />
                                </div>
                                <div className="text-white">
                                    <div className="flex justify-between items-center gap-[5px] mb-3">
                                        <div className="w-[60%] font-bold hover:text-[#e2d703]">Uncharted</div>
                                        <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />2022</div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="border-2 py-1 px-2 text-[#e2d703]">
                                            HD
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />116 min</div>
                                            <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />7.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
                        <Link href='/movie_page'>
                            <div className="flex flex-col justify-center">
                                <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                                    <Image className=" rounded-md" src='/images/upcoming-1.png' alt="failed to load"
                                        layout="fill" objectFit="cover" />
                                </div>
                                <div className="text-white">
                                    <div className="flex justify-between items-center gap-[5px] mb-3">
                                        <div className="w-[60%] font-bold hover:text-[#e2d703]">The Northman</div>
                                        <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />2022</div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="border-2 py-1 px-2 text-[#e2d703]">
                                            4K
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />137 min</div>
                                            <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />7.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
                        <Link href='/movie_page'>
                            <div className="flex flex-col justify-center">
                                <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                                    <Image className=" rounded-md" src='/images/upcoming-2.png' alt="failed to load"
                                        layout="fill" objectFit="cover" />
                                </div>
                                <div className="text-white">
                                    <div className="flex justify-between items-center gap-[5px] mb-3">
                                        <div className="w-[60%] font-bold hover:text-[#e2d703]">Doctor Strange in the Multiverse of Madness</div>
                                        <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />2022</div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="border-2 py-1 px-2 text-[#e2d703]">
                                            4K
                                        </div>
                                        <div className="flex justify-between items-center gap-5">
                                            <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />126 min</div>
                                            <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />8.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}