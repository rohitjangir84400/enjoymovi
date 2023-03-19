import Image from "next/image";
import Link from "next/link";
import { TabPanel, useTabs } from "react-headless-tabs";
import Meta from "./meta";
import { CalendarDaysIcon, ClockIcon, StarIcon} from "@heroicons/react/24/solid";

export default function Tranding({ trandingdata }) {

  const [selectedTab, setSelectedTab] = useTabs([
    "trandingmovie",
    "trandingtv",
  ]);
  return (
    <div style={{
      backgroundImage: `url('/images/upcoming-bg.png')`, backgroundPosition: "center", backgroundSize: "cover",
    }}>
    <Meta title='Tranding' />
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 text-white">
      {trandingdata.map(trandingmovie => {
        return (
          <div key={trandingmovie.id} className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
            <Link href='/'>
                <div className="flex flex-col justify-center">
                    <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                        <Image className=" rounded-md" src={`https://image.tmdb.org/t/p/w500${trandingmovie.poster_path}`} alt="failed to load" width='100%' height='100%'
                            layout="fill" objectFit="cover" />
                    </div>
                    <div className="text-white">
                        <div className="flex justify-between items-center gap-[5px] mb-3">
                            <div className="w-[60%] font-bold hover:text-[#e2d703]">{trandingmovie.title} {trandingmovie.name}</div>
                            <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />{trandingmovie.release_date}</div>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="border-2 py-1 px-2 text-[#e2d703]">
                                {trandingmovie.original_language}
                            </div>
                            <div className="flex justify-between items-center gap-5">
                                <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />{trandingmovie.runtime}</div>
                                <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />{trandingmovie.vote_average}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        )
      })
      }
      
    </div>
    </div>
  );
}    