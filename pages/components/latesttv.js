import Link from "next/link";
import Image from "next/image";


export default function Latest_tv({ Latesttv }) {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 p-5">
            {Latesttv.map(newtv => {
                return (
                    <div key={newtv.id} className="group cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                        <Link href={`/latesttv/${newtv.id}`}>
                            <div>
                                <Image src={`https://image.tmdb.org/t/p/w500${newtv.poster_path}`} alt="failed to load" height={750} width={500} />
                                <div className="invisible group-hover:visible px-2 h-[50px] transition duration-700 ease-in-out">{newtv.name}</div>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}