
import { useState } from "react";
import TvCard from "./tvcard";

export default function TvTabcontent(props) {
    const { prop1, prop2, prop3} = props
    console.log(prop1, prop2, prop3);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div style={{
            backgroundImage: `url('/images/upcoming-bg.png')`, backgroundPosition: "center", backgroundSize: "cover",
          }}>
            <div className=" mb-10 flex flex-wrap text-center md:text-left md:justify-between justify-center items-center px-5 py-10 ">
                <div className="text-[40px] text-white font-bold mb-3 md:mb-0">
                    <div>Tv Shows For You</div>
                    <div className="text-[15px] text-[#e2d703]">Online Streaming</div>
                </div>
                <div className="flex md:gap-10 gap-2">
                    <button
                        className={activeTab === 0 ? 'border-[#e2d703] text-white bg-[#21232b] border-2 py-2 px-5 rounded-full text-[12px]' : 'text-white bg-[#21232b] border-2 border-[#2e303e] py-2 px-5 rounded-full text-[12px]'}
                        onClick={() => handleTabClick(0)}
                    >
                        Latest
                    </button>
                    <button
                        className={activeTab === 1 ? 'border-[#e2d703] text-white bg-[#21232b] border-2 py-2 px-5 rounded-full text-[12px]' : 'text-white bg-[#21232b] border-2 border-[#2e303e] py-2 px-5 rounded-full text-[12px]'}
                        onClick={() => handleTabClick(1)}
                    >
                        Toprated
                    </button>
                    <button
                        className={activeTab === 2 ? 'border-[#e2d703] text-white bg-[#21232b] border-2 py-2 px-5 rounded-full text-[12px]' : 'text-white bg-[#21232b] border-2 border-[#2e303e] py-2 px-5 rounded-full text-[12px]'}
                        onClick={() => handleTabClick(2)}
                    >
                        Popular
                    </button>
                </div>
            </div>
            <div className="tab-content">
                {activeTab === 0 && (
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 text-white">
                        {prop1 && prop1.map(movie => {
                            return (
                                <TvCard key={movie.id} prop={movie} name='latesttv' />
                            );
                        })}
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 text-white">
                        {prop2.map(movie => {
                            return (
                                <TvCard key={movie.id} prop={movie} name='toptv' />
                            );
                        })}
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 text-white">
                        {prop3.map(movie => {
                            return (
                                <TvCard key={movie.id} prop={movie} name='tv' />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
