import { FilmIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


export default function Movi() {
    return (
        <div className="p-10 text-white"style={{
            backgroundImage: `url('/images/footer-bg.jpg')`, backgroundPosition: "center", backgroundSize: "cover",
          }}>
            <div className="flex flex-wrap items-center">
                <div className="md:basis-1/2 basis-12/12 md:border-r-4 border-dashed px-5 text-center sm:text-left">
                    <div className="text-[40px] font-bold py-5 ">Enjoymovi</div>
                    <div className="font-thin ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div className="md:basis-1/2 basis-12/12">
                    <div className="w-fit mx-auto">
                        <FilmIcon className="h-[300px] w-[300px] fill-[#e2d703]" />
                    </div>
                </div>
            </div>
        </div>
    );
}