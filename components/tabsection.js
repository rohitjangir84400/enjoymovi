
import { useState } from "react";
import Card from "./card";

export default function Tabcontent(props) {
    const { prop1, prop2, prop3, name1, name2, name3 } = props
    console.log(prop1, prop2, prop3);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div className="p-2" style={{
            backgroundImage: `url('/images/upcoming-bg.png')`, backgroundPosition: "center", backgroundSize: "cover",
          }}>
            <div className="flex flex-wrap text-center md:text-left md:justify-between justify-center items-center px-5 py-10 ">
                <div className="text-[40px] text-white font-bold mb-3 md:mb-0">
                    <div>Movies For You</div>
                    <div className="text-[15px] text-[#e2d703]">Online Streaming</div>
                </div>
                <div className="flex md:gap-10 gap-2">
                    <button
                        className={activeTab === 0 ? 'border-[#e2d703] text-white bg-[#21232b] border-2 py-2 px-5 rounded-full text-[12px]' : 'text-white bg-[#21232b] border-2 border-[#2e303e] py-2 px-5 rounded-full text-[12px]'}
                        onClick={() => handleTabClick(0)}
                    >
                        latest
                    </button>
                    <button
                        className={activeTab === 1 ? 'border-[#e2d703] text-white bg-[#21232b] border-2 py-2 px-5 rounded-full text-[12px]' : 'text-white bg-[#21232b] border-2 border-[#2e303e] py-2 px-5 rounded-full text-[12px]'}
                        onClick={() => handleTabClick(1)}
                    >
                        toprated
                    </button>
                    <button
                        className={activeTab === 2 ? 'border-[#e2d703] text-white bg-[#21232b] border-2 py-2 px-5 rounded-full text-[12px]' : 'text-white bg-[#21232b] border-2 border-[#2e303e] py-2 px-5 rounded-full text-[12px]'}
                        onClick={() => handleTabClick(2)}
                    >
                        upcoming
                    </button>
                </div>
            </div>
            <div className="">
                {activeTab === 0 && (
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 text-white">
                        {prop1 && prop1.map(movie => {
                            return (
                                <Card key={movie.id} prop={movie} name='movie' />
                            );
                        })}
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 text-white">
                        {prop2.map(movie => {
                            return (
                                <Card key={movie.id} prop={movie} name='tmovie' />
                            );
                        })}
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 text-white">
                        {prop3.map(movie => {
                            return (
                                <Card key={movie.id} prop={movie} name='upcomingmovies' />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
