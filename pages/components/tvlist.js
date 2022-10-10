import Image from "next/image";
import Link from "next/link";
import { TabPanel, useTabs } from "react-headless-tabs";


export default function TvList({ latesttvshow , topratedtv, populartv }) {

  const [selectedTab, setSelectedTab] = useTabs([
    "latest",
    "popular",
    "top_rated",
  ]);

  return (
    <div>
      <div className="flex text-center hover:cursor-pointer bg-black text-white border-b">
      <div className="grow py-5 hover:text-red-700"
          isActive={selectedTab === "latest"}
          onClick={() => setSelectedTab("latest")}
        >
           Latest
        </div>
        <div className="grow py-5 hover:text-red-700"
          isActive={selectedTab === "popular"}
          onClick={() => setSelectedTab("popular")}
        >
          Popular
        </div>
        <div className="grow py-5 hover:text-red-700"
          isActive={selectedTab === "top_rated"}
          onClick={() => setSelectedTab("top_rated")}
        >
          Toprated
        </div>
      </div>

      <div>
        <TabPanel hidden={selectedTab !== "latest"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 bg-black p-5">
          {latesttvshow.map(newtv => {
        return (
          <div key={newtv.id}className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
            <Link href={`/latesttv/${newtv.id}`}>
              <div className="bg-white rounded-3xl">
                <Image src={`https://image.tmdb.org/t/p/w500${newtv.poster_path}`} alt="failed to load" height={750} width={500} className="rounded-t-3xl" />
                <div className="px-2 text-black text-centerx h-[50px] rounded-b-3xl">{newtv.name}</div>
              </div>
            </Link>
          </div>
        );
      })}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "popular"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 bg-black p-5">
            {populartv.map(populartv => {
              return (
                <div key={populartv.id} className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                  <Link href={`/tv/${populartv.id}`}>
                    <div className="bg-white rounded-3xl">
                      <Image src={`https://image.tmdb.org/t/p/w500${populartv.poster_path}`} alt="failed to load" height={750} width={500} className="rounded-t-3xl" />
                      <div className="px-2 text-black text-centerx h-[50px] rounded-b-3xl">{populartv.name}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "top_rated"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 bg-black p-5">
            {topratedtv.map(toptv => {
              return (
                <div key={toptv.id} className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                  <Link href={`/toptv/${toptv.id}`}>
                    <div className="bg-white rounded-3xl">
                      <Image src={`https://image.tmdb.org/t/p/w500${toptv.poster_path}`} alt="failed to load" height={750} width={500} className="rounded-t-3xl" />
                      <div className="px-2 text-black text-centerx h-[50px] rounded-b-3xl">{toptv.name}</div>
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
      