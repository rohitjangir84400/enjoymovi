import { CalendarDaysIcon, ClockIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
    const{prop,name}=props;
    console.log(prop);
    return (
        <div key={prop.id} className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
            <Link href={`/${name}/${prop.id}`}>
                <div className="flex flex-col justify-center">
                    <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                        <Image className=" rounded-md" src={`https://image.tmdb.org/t/p/w500${prop.poster_path}`} alt="failed to load"
                            layout="fill" objectFit="cover" />
                    </div>
                    <div className="text-white">
                        <div className="flex justify-between items-center gap-[5px] mb-3">
                            <div className="w-[60%] font-bold hover:text-[#e2d703]">{prop.title}</div>
                            <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />{prop.release_date}</div>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="border-2 py-1 px-2 text-[#e2d703]">
                                {prop.original_language}
                            </div>
                            <div className="flex justify-between items-center gap-5">
                                <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />{prop.runtime}</div>
                                <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />{prop.vote_average}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
