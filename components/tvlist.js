import Image from "next/image";
import Link from "next/link";
import { TabPanel, useTabs } from "react-headless-tabs";
import Meta from "./meta";


export default function TvList({ latesttvshow, topratedtv, populartv }) {

  const [selectedTab, setSelectedTab] = useTabs([
    "latest",
    "popular",
    "top_rated",
  ]);

  return (
    <div className="text-white">
      <Meta title='Tv_List' />
      <div className="flex text-center hover:cursor-pointer">
        <div className="grow py-3 text-[20px]  hover:text-black hover:bg-white"
          onClick={() => setSelectedTab("latest")}
        >
          Latest
        </div>
        <div className="grow py-3 text-[20px]  hover:text-black hover:bg-white"
          onClick={() => setSelectedTab("popular")}
        >
          Popular
        </div>
        <div className="grow py-3 text-[20px]  hover:text-black hover:bg-white"
          onClick={() => setSelectedTab("top_rated")}
        >
          Toprated
        </div>
      </div>

      <div>
        <TabPanel hidden={selectedTab !== "latest"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 p-5">
            {latesttvshow.map(newtv => {
              return (
                <div key={newtv.id} className="group cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                  <Link href={`/latesttv/${newtv.id}`}>
                    <div>
                      <Image src={`https://image.tmdb.org/t/p/w500${newtv.poster_path}`} alt="failed to load" height={750} width={500} />
                      <div className="invisible group-hover:visible px-2 h-[50px] transition duration-700 ease-in-out">{newtv.name}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "popular"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 p-5">
            {populartv.map(newtv => {
              return (
                <div key={newtv.id} className="group cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                  <Link href={`/tv/${newtv.id}`}>
                    <div>
                      <Image src={`https://image.tmdb.org/t/p/w500${newtv.poster_path}`} alt="failed to load" height={750} width={500} />
                      <div className="invisible group-hover:visible px-2 h-[50px] transition duration-700 ease-in-out">{newtv.name}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "top_rated"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 p-5">
            {topratedtv.map(newtv => {
              return (
                <div key={newtv.id} className="group cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                  <Link href={`/toptv/${newtv.id}`}>
                    <div>
                      <Image src={`https://image.tmdb.org/t/p/w500${newtv.poster_path}`} alt="failed to load" height={750} width={500} />
                      <div className="invisible group-hover:visible px-2 h-[50px] transition duration-700 ease-in-out">{newtv.name}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </div>
    </div>
  );
}
