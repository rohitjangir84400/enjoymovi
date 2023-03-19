


export default function Joinsection() {
    return (
        <div className="w-full text-white text-center px-10 py-20"
        style={{
            backgroundImage: `url('/images/bg-pattern.jpg')`, backgroundPosition: "center", backgroundSize: "cover",
          }}>
            <div className="text-[50px] text-[#21232b] font-bold pb-5">Join Enjoymovi Now!</div>
            <div className="text-[#21232b] text-[25px] font-semibold py-5">Register Or Log in With Your Email</div>
            <div className="flex flex-wrap justify-center gap-10">
                <div>
                    <div className="py-5 px-10 bg-[#21232b] border-2 border-[#e2d703] hover:cursor-pointer">Click To Login</div>
                </div>
                <div>
                    <div className="py-5 px-10 bg-[#21232b] border-2  border-[#e2d703] hover:cursor-pointer">Click To Register</div>
                </div>
            </div>
        </div>
    );
}