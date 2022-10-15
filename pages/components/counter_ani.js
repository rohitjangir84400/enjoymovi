import CountUp from "react-countup";
import next from "next";
export default function Counteranimation() {
    return (
        <>
            <div className="p-10">
                <div className="flex flex-wrap md:flex-row flex-col text-center text-[50px] text-white font-bold">
                <div className="basis-12/12 md:basis-1/3 ">
                    <CountUp end={1130} duration={5} />
                    <div className=" text-[30px] font-normal ">movies</div>
                </div>
                <div className="basis-12/12 md:basis-1/3 ">
                    <CountUp end={746} duration={5} />
                    <div className=" text-[30px] font-normal ">web series</div>
                </div>
                <div className="basis-12/12 md:basis-1/3">
                    <CountUp end={2578} duration={5} />
                    <div className=" text-[30px] font-normal ">users</div>
                </div>
                </div>
            </div>
        </>
    );
}