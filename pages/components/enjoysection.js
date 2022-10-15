

export default function Enjoy() {
  return (
    <div className="h-[550px] w-full" style={{
      backgroundImage: `url('/images/backimgone.jpg')`, backgroundPosition: "center", backgroundSize: "cover",
    }}>
      <div className="group w-full h-full p-2 bg-[#010d1a]/90 text-center text-[70px] md:text-[110px] text-white font-extrabold">
        <div>
          <span>latest movies</span><br />
          <span>& tv</span>

        </div>
        <div className="py-10 group-hover:animate-bounce ">watch now</div>
      </div>
    </div>
  );
}



