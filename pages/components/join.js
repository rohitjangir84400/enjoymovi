


export default function Joinsection() {
    return (
        <div className="w-full bg-[#e7edef] text-center px-10 py-20">
            <div className="text-[50px] text-[#3e4555] pb-5">Join Movify Now!</div>
            <div className="text-[#948a99] py-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br />nonummy consectetuer adipiscing.</div>
            <div className="w-full p-5">
                <div className="flex justify-center items-center">
                    <div className="rounded-l-xl overflow-hidden">
                        <form>
                            <input type="text" id="last" name="last" placeholder="Your Email" className="py-4 pl-5 w-[50vw] outline-0" />
                        </form>
                    </div>
                    <div className="py-2 px-4 bg-[#9352b3] rounded-r-xl text-white text-[25px]">
                        Suscribe
                    </div>
                </div>
            </div>
        </div>
    );
}