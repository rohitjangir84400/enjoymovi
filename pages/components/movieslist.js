import { TabPanel, useTabs } from "react-headless-tabs";
import Meta from "./meta";


export default function MovieList({ movie, toprated, upcoming }) {

  const [selectedTab, setSelectedTab] = useTabs([
    "upcoming",
    "popular",
    "top_rated",
  ]);

  return (
    <div>
      <Meta title="Movies_List" />
      <div className="flex text-center hover:cursor-pointer text-white">
        <div className="grow py-3 text-[20px]  hover:text-black hover:bg-white "
          onClick={() => setSelectedTab("upcoming")}
        >
          Upcoming
        </div>
        <div className="grow py-3 text-[20px]  hover:text-black hover:bg-white "
          onClick={() => setSelectedTab("popular")}
        >
          Popular
        </div>
        <div className="grow py-3 text-[20px]  hover:text-black hover:bg-white "
          onClick={() => setSelectedTab("top_rated")}
        >
          Toprated
        </div>
      </div>


      <div>
        <TabPanel hidden={selectedTab !== "upcoming"}>
          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2 px-5 py-10 text-white">
            {upcoming.map(movie => {
              return (
                <div key={movie.id} className="group hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                  <Link href={`/upcomingmovies/${movie.id}`}>
                    <div>
                      <div>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="failed to load" height={750} width={500} />
                        <div className=" invisible group-hover:visible px-2 h-[50px] transition duration-700 ease-in-out">{movie.title}</div>
                      </div>

                    </div>
                  </Link>
                </div>

              );
            })}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "popular"}>
          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2 px-5 py-10 text-white">
            {movie.map(movie => {
              return (
                <div key={movie.id} className="group hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                  <Link href={`/movie/${movie.id}`}>
                    <div>
                      <div>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="failed to load" height={750} width={500} />
                        <div className="invisible group-hover:visible px-2 h-[50px] transition duration-700 ease-in-out">{movie.title}</div>
                      </div>

                    </div>
                  </Link>
                </div>

              );
            })}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "top_rated"}>
          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2 px-5 py-10 text-white" >
            {toprated.map(movie => {
              return (
                <div key={movie.id} className="group hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                  <Link href={`/tmovie/${movie.id}`}>
                    <div>
                      <div>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="failed to load" height={750} width={500} />
                        <div className="invisible group-hover:visible px-2 h-[50px] transition duration-700 ease-in-out">{movie.title}</div>
                      </div>

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


