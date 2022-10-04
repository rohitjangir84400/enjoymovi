import next from "next";
import Link from "next/link";
import Image from "next/image";


export default function Enjoy() {
  return (
      <div className="h-[550px] w-full" style={{
        backgroundImage: `url('/images/backimgone.jpg')`, backgroundPosition: "center", backgroundSize: "cover",
      }}>
        <div className="relative text-center text-white md:text-[80px] text-[40px] ">
          latest movies & series
        </div>
        <div className="relative text-center text-white md:text-[80px] text-[40px]">
          watch now
        </div>
      </div>
  );
}



