import Image from "next/image";

export default function Newssection() {
    return (
        <div className="text-center bg-[#edf5f7] px-10 py-20">
            <div>
                <div className="text-[50px] text-[#3e4555] pb-5">latest news</div>
                <div className="text-[#948a99] pb-5">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br/>nonummy consectetuer adipiscing.
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="basis-12/12 md:basis-1/3 p-5">
                    <div className="h-[250px] relative">
                        <Image src={'/images/img-1.jpg'} alt="failed to load" layout='fill' objectFit="contain" />
                    </div>
                    <div className="bg-white border">
                        <div>
                            <div className="w-fit mx-auto overflow-visible">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-[150px] h-[150px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </div>
                        </div>
                        <div className="text-[25px] font-bold text-[#948a99]">
                            Upcoming movies
                        </div>
                        <div className="px-5 py-10 text-[#948a99]">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...
                        </div>
                    </div>
                </div>


                <div className="basis-12/12 md:basis-1/3 p-5">
                    <div className="h-[250px] relative">
                        <Image src={'/images/img-2.jpg'} alt="failed to load" layout='fill' objectFit="contain" />
                    </div>
                    <div className="bg-white border">
                        <div>
                            <div className="w-fit mx-auto overflow-visible">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-[150px] h-[150px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </div>
                        </div>
                        <div className="text-[25px] font-bold text-[#948a99]">Top rated movies</div>
                        <div className="px-5 py-10 text-[#948a99]">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...
                        </div>
                    </div>

                </div>
                <div className="basis-12/12 md:basis-1/3 p-5">
                    <div className="h-[250px] relative">
                        <Image src={'/images/img-1.jpg'} alt="failed to load"layout='fill' objectFit="contain" />
                    </div>
                    <div className="bg-white border">
                        <div>
                            <div className="w-fit mx-auto overflow-visible">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-[150px] h-[150px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </div>
                        </div>
                        <div className="text-[25px] font-bold text-[#948a99]">Top viewed movies</div>
                        <div className="px-5 py-10 text-[#948a99]">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}