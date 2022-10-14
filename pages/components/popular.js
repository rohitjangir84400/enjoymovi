import Link from "next/link";
import Image from "next/image";

export default function Popular_movies({ Movie }) {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2 px-5 py-10 text-white">
            {Movie.map(movie => {
                return (
                    <div key={movie.id} className="group hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
                        <Link href={`/movie/${movie.id}`}>
                            <div>
                                <div>
                                    <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="failed to load" height={750} width={500} />
                                    <div className="invisible group-hover:visible px-2 h-[50px] transition duration-700 ease-in-out">{movie.title}</div>
                                </div>

                            </div>
                        </Link>
                    </div>

                );
            })}
        </div>
    );
}