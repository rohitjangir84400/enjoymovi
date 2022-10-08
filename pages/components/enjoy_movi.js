import Image from "next/image";


export default function Movi(){
    return(
        <div className="bg-[#edf5f7] p-10">
            <div className="flex flex-wrap items-center">
                <div className="md:basis-1/2 basis-12/12 border-r-4 border-dashed px-5">
                    <div className="text-[40px] text-[#3e4555] font-bold py-5">Enjoy Movify</div>
                    <div className="text-[#948a99] font-thin">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div className="md:basis-1/2 basis-12/12">
                    <div className="w-fit mx-auto">
                    <Image src={'/images/logo.png'} alt='' height={400} width={400} className=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}