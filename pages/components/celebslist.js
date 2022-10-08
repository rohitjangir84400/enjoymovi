import Image from "next/image";
import Link from "next/link";

export default function Celebs({ latestcelebs }) {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 bg-white p-5">
            {latestcelebs.map(
                latestcelebs => {
                    return (
                        <div key={latestcelebs.id}>
                            <Link href={`/celeb/${latestcelebs.id}`}>
                            <div className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                                <div className="bg-black rounded-3xl">
                                    <Image src={`https://image.tmdb.org/t/p/w500${latestcelebs.profile_path}`} alt="failed to load image" height={750} width={500} className="rounded-t-3xl" />
                                    <div className="px-2 text-white text-center h-[50px] rounded-b-3xl">{latestcelebs.name}</div>
                                </div>

                            </div>
                        </Link>
                        </div>
                    );
                }
            )}
        </div>
    );
}