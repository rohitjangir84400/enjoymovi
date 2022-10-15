import Image from "next/image";


export default function Movi() {
    return (
        <div className="p-10 text-white">
            <div className="flex flex-wrap items-center">
                <div className="md:basis-1/2 basis-12/12 md:border-r-4 border-dashed px-5">
                    <div className="text-[40px] font-bold py-5">enjoymovi</div>
                    <div className="font-thin">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div className="md:basis-1/2 basis-12/12">
                    <div className="w-fit mx-auto">
                        <Image src={'/images/Logo.png'} alt="failed to load" height={400} width={400} />
                    </div>
                </div>
            </div>
        </div>
    );
}