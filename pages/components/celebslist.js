import Image from "next/image";
import Link from "next/link";
import Meta from "./meta";
import next from "next";

export default function Celebs({ latestcelebs }) {
    return (
        <>
            <Meta title='Celebrites' />
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 text-white p-5">
                {latestcelebs.map(
                    latestcelebs => {
                        return (
                            <div key={latestcelebs.id}>
                                <Link href={`/celeb/${latestcelebs.id}`}>
                                    <div className="group cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                                        <div>
                                            <Image src={`https://image.tmdb.org/t/p/w500${latestcelebs.profile_path}`} alt="failed to load image" height={750} width={500} />
                                            <div className="invisible group-hover:visible px-2 h-[50px] transition duration-700 ease-in-out">{latestcelebs.name}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    }
                )}
            </div>
        </>
    );
}