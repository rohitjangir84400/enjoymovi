import next from "next";
import Link from "next/link";
import Image from "next/image";


export default function Enjoy() {
  return (
    <>
      <div className=" flex justify-center items-center h-[550px] w-full relative" style={{
        backgroundImage: `url('/images/backimgone.jpg')`, backgroundPosition: "center", backgroundSize: "cover",
      }}>
        <div className="absolute top-[100px] text-white md:text-[80px] text-[40px]">
          latest movies & series
        </div>
        <div className="absolute bottom-[100px] text-white md:text-[80px] text-[40px]">
          watch now
        </div>

        <div className="w-full">
          <div className="flex justify-center items-center">
              <div className="rounded-l-xl overflow-hidden">
                <form>
                  <input type="text" id="last" name="last" placeholder="Enter movies & series title" className="py-4 pl-5 w-[50vw] outline-0" />
                </form>
              </div>
              <div className="py-2 px-4 bg-[#9352b3] rounded-r-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
          </div>
        </div>

        

      </div>
    </>
  );
}



