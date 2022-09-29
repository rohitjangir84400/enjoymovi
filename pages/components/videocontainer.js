import Image from "next/image";


export default function Videocontainer(){
    return(
        <>
         <div style={{
        backgroundImage:`url('/images/backimgtwo.jpg')`, backgroundPosition: "center", backgroundSize: "cover",
      }}>
          <div className=" bg-[#3E4555]/[0.85] p-10">
            <div className="text-white text-[50px] text-center py-5">movies tailer</div>
            <div className="flex md:h-[500px] p-5">
                <div className="relative md:basis-2/3 basis-1 p-5 h-[200px] w-full">
                {/* <div className="absolute z-10 top-0 left-0 bg-red-600 h-full w-full text-center text-white hover:invisible">
                    Kgf chapter-2
                </div> */}
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JKa05nyUmuQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} className="rounded-xl overflow-hidden"></iframe>

                </div>
                <div className="md:basis-1/3 basis-1 p-5 h-[200px] w-full">
                    <div className="pb-4 h-[50%]">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8Qn_spdM5Zg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} className="rounded-xl overflow-hidden"></iframe>

                    </div>
                    <div className="h-[50%]">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Lk2oDvoonUc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} className="rounded-xl overflow-hidden"></iframe>
                    </div>
                </div>
            </div>
            </div>
         </div>
        </>
    );
}