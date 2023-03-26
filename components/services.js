import { TvIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


export default function Services() {
    return (
        <div className="py-[50px] text-white " style={{
            backgroundImage: `url('/images/service-bg.jpg')`, backgroundPosition: "center", backgroundSize: "cover",
        }}>
            <div className="flex items-center flex-wrap p-2">
                <div className="relative overflow-hidden aspect-[1/1] basis-full md:basis-1/2">
                    <Image className="" src='/images/service-banner.jpg' alt="failed to load"
                        layout="fill" objectFit="contain" />

                </div>
                <div className="basis-full md:basis-1/2 p-2 md:mt-0 mt-5">
                    <div className="flex items-center">
                        <div className="w-14 h-1 bg-[#e2d703]"></div>
                        <div className="ml-2">OUR SERVICES</div>
                    </div>
                    <div className="text-[35px] font-bold mt-5">Download Your Shows & Movies Watch Offline.</div>
                    <div className="text-[12px] mt-2">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</div>
                    <div className="text-[#e2d703] font-bold mt-3">TRIAL START FIRST 30 DAYS.</div>
                    <div className="flex items-center gap-3 mt-5">

                        <div className="border border-dashed p-7">
                            <div>
                                <TvIcon className="h-6 w-6" />
                            </div>
                        </div>
                        <div>
                            <div className="text-[20px] font-bold">Enjoy on Your TV.</div>
                            <div className="text-[12px]">Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <div className="border border-dashed p-7">
                            <div>
                                <VideoCameraIcon className="h-6 w-6" />
                            </div>
                        </div>
                        <div>
                            <div className="text-[20px] font-bold">Watch Everywhere.</div>
                            <div className="text-[12px]">Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}