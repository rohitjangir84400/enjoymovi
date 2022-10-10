import Image from "next/image";
import Link from "next/link";
import { TabPanel, useTabs } from "react-headless-tabs";

export default function Tranding({ trandingdata }) {

  const [selectedTab, setSelectedTab] = useTabs([
    "trandingmovie",
    "trandingtv",
  ]);
  return (
    <div>

      <div className="flex text-center hover:cursor-pointer bg-black text-white border-b">
        <div className="grow py-5 hover:text-red-700 "
          isActive={selectedTab === "trandingmovie"}
          onClick={() => setSelectedTab("trandingmovie")}
        >
          Tranding Movie
        </div>
        <div className="grow py-5 hover:text-red-700 "
          isActive={selectedTab === "trandingtv"}
          onClick={() => setSelectedTab("trandingtv")}
        >
          Tranding Tv
        </div>
      </div>

      <div>
        <TabPanel hidden={selectedTab !== "trandingmovie"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 bg-white p-5">
            {trandingdata.filter(tranding => tranding.media_type === "movie").map(trandingmovie => {
              return (
                <div key={trandingmovie.id}>
                  <Link href={`/movie/${trandingmovie.id}`}>
                    <div className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                      <div className="bg-black rounded-3xl">
                        <Image src={`https://image.tmdb.org/t/p/w500${trandingmovie.poster_path}`} alt='failed to load image' height={750} width={500} className="rounded-t-3xl" />
                        <div className="px-2 text-white text-center h-[50px] rounded-b-3xl">{trandingmovie.title}</div>
                      </div>

                    </div>
                  </Link>
                </div>
              )
            })
            }
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "trandingtv"}>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 bg-white p-5">
            {trandingdata.filter(tranding => tranding.media_type === "tv").map(trandingtv => {
              return (
                <div key={trandingtv.id}>
                  <Link href={`/celeb/${trandingtv.id}`}>
                    <div className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                      <div className="bg-black rounded-3xl">
                        <Image src={`https://image.tmdb.org/t/p/w500${trandingtv.poster_path}`} alt='failed to load image' height={750} width={500} className="rounded-t-3xl" />
                        <div className="px-2 text-white text-center h-[50px] rounded-b-3xl">{trandingtv.name}</div>
                      </div>

                    </div>
                  </Link>
                </div>
              )
            })
            }
          </div>
        </TabPanel>
      </div>

    </div>
  );
}    