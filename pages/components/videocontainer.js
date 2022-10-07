import Image from "next/image";


export default function Videocontainer() {
    return (
        <>
            <div style={{
                backgroundImage: `url('/images/backimgtwo.jpg')`, backgroundPosition: "center", backgroundSize: "cover",
            }}>
                <div className="bg-[#5d5e5c]/[0.9]">
                    <div className="text-white text-[50px] text-center py-5">movies tailer</div>

                    <div className="grid md:grid-cols-2 p-10">
                        <div className="p-2">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JKa05nyUmuQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} className="rounded-xl overflow-hidden"></iframe>
                        </div>
                        <div className="p-2">
                            <div className="p-2">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8Qn_spdM5Zg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} className="rounded-xl overflow-hidden"></iframe>
                            </div>
                            <div className="p-2">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Lk2oDvoonUc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} className="rounded-xl overflow-hidden"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

