import Image from "next/image";
import Link from "next/link";
import { TabPanel, useTabs } from "react-headless-tabs";

export default function Tranding({ trandingdata }) {

  const [selectedTab, setSelectedTab] = useTabs([
    "trandingmovie",
    "trandingtv",
  ]);
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 p-5 text-white">
      {trandingdata.map(trandingmovie => {
        return (
          <div key={trandingmovie.id} className="group" >
            <Link href='/'>
              <div className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                <div>
                  <Image src={`https://image.tmdb.org/t/p/w500${trandingmovie.poster_path}`} alt='failed to load image' height={750} width={500} />
                  <div className=" invisible group-hover:visible px-2 h-[50px] transition duration-700 ease-in-out">{trandingmovie.title} {trandingmovie.name}</div>
                </div>

              </div>
            </Link>
          </div>
        )
      })
      }
    </div>
  );
}    