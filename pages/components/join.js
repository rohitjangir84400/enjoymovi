


export default function Joinsection() {
    return (
        <div className="w-full text-white text-center px-10 py-20">
            <div className="text-[50px] pb-5">Join enjoymovi Now!</div>
            <div className="text-[#948a99] py-5">Register With Your Email</div>
            <div className="w-full p-5">
                <div className="flex justify-center items-center">
                    <div className="rounded-l-xl overflow-hidden">
                        <form>
                            <input type="text" id="last" name="last" placeholder="Your Email" className="py-4 pl-5 w-[50vw] outline-0 text-gray-400 " />
                        </form>
                    </div>
                    <div className="py-[9px] px-4 bg-[#9352b3] rounded-r-xl text-white text-[25px]">
                        Suscribe
                    </div>
                </div>
            </div>
        </div>
    );
}