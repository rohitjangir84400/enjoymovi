import { TabPanel, useTabs } from "react-headless-tabs";
import Upcoming_movies from "./upcoming";
import Popular_movies from "./popular";
import Toprated_movies from "./toprated";
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
          <Upcoming_movies Upcoming={upcoming} />
        </TabPanel>
        <TabPanel hidden={selectedTab !== "popular"}>
          <Popular_movies Movie={movie} />
        </TabPanel>
        <TabPanel hidden={selectedTab !== "top_rated"}>
          <Toprated_movies Toprated={toprated} />
        </TabPanel>
      </div>
    </div>
  );
}


