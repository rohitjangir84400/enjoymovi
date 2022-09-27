

export default function Footer() {
    return (
        <>
            <div className=" w-full bg-[#3e4555] text-white p-10">
                <div className="flex flex-wrap py-10">
                    <div className="basis-12/12 sm:basis-1/2 md:basis-1/4 p-5">
                        <div className="text-[25px] py-5 font-bold">
                            enjoymovi
                        </div>
                        <div className="font-thin">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque. Praesentium suscipit provident explicabo dignissimos nostrum numquam deserunt earum accusantium et fugit.
                        </div>
                    </div>



                    <div className="basis-12/12 sm:basis-1/2 md:basis-1/4 p-5">
                        <div className="text-[25px] py-5 font-bold">
                            Usefull links
                        </div>
                        <div className="font-thin">
                            <div className="py-1">About enjoymovi</div>
                            <div className="py-1">Blogs</div>
                            <div className="py-1">Forem</div>
                            <div className="py-1">My Account</div>
                            <div className="py-1">Watch List</div>
                        </div>
                    </div>



                    <div className="basis-12/12 sm:basis-1/2 md:basis-1/4 p-5">
                        <div className="text-[25px] py-5 font-bold">Latest News</div>
                        <div className="py-1 font-thin">Blog 1
                            <div className="text-[#a8a1ac]">January 13, 2018</div>
                        </div>
                        <div className="py-1 font-thin">Blog 2
                        <div className="text-[#a8a1ac]">January 13, 2018</div>
                        </div>
                        <div className="py-1 font-thin">Blog 3
                        <div className="text-[#a8a1ac]">January 13, 2018</div>
                        </div>

                    </div>



                    <div className="basis-12/12 sm:basis-1/2 md:basis-1/4 p-5">
                        <div className="text-[25px] py-5 font-bold">Follow us</div>
                        <div className="font-thin">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque.
                        </div>
                        <div className="flex">
                            <div>Fb</div>
                            <div>Insta</div>
                            <div>Twitter</div>
                            <div>google</div>
                        </div>
                    </div>
                </div>


                <div className="bg-[#FFFFFF]/[0.2] h-[2px]"></div>

                <div className="flex justify-between px-5 pt-5 font-thin">
                    <div className="flex flex-wrap">
                        <div className="p-2">Privacy & Cookies</div>
                        <div className="p-2">Terms & Conditions</div>
                        <div className="p-2">Leagal Disclaimer</div>
                        <div className="p-2">Community</div>
                    </div>


                    <div>
                    All Rights Reserved by Movify.
                    </div>
                </div>
            </div>
        </>
    );
}