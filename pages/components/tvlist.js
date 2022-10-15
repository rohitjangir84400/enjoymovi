import Image from "next/image";
import Link from "next/link";
import { TabPanel, useTabs } from "react-headless-tabs";
import Latest_tv from "./latesttv";
import Meta from "./meta";
import Popular_tv from "./populartv";
import Toprated_tv from "./topratedtv";


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
          <Latest_tv Latesttv={latesttvshow} />
        </TabPanel>
        <TabPanel hidden={selectedTab !== "popular"}>
          <Popular_tv Populartv={populartv} />
        </TabPanel>
        <TabPanel hidden={selectedTab !== "top_rated"}>
          <Toprated_tv Topratedtv={topratedtv} />
        </TabPanel>
      </div>
    </div>
  );
}
