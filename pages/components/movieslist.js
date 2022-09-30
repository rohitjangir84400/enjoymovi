import Image from "next/image";
import Link from "next/link";

export default function MovieList({ movie , toprated , upcoming }) {
  return (
    <>
    <div className="text-[30px] bg-black text-[#00ffff] py-5 pl-5">Upcoming Movies</div>
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2 bg-black p-5">
      {upcoming.map(movie => {
        return (
          <div key={movie.id} className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
            <Link href={`/upcomingmovies/${movie.id}`}>
              <div>
                <div className="bg-white rounded-3xl">
                  <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} aly='' height={750} width={500} className="rounded-t-3xl" />
                  <div className="px-2 text-black text-center h-[50px] rounded-b-3xl">{movie.title}</div>
                </div>

              </div>
            </Link>
          </div>

        );
      })}
    </div>
    <div className="text-[30px] bg-black text-[#00ffff] py-5 pl-5">Popular Movies</div>
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2 bg-black p-5">
      {movie.map(movie => {
        return (
          <div key={movie.id} className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
            <Link href={`/movie/${movie.id}`}>
              <div>
                <div className="bg-white rounded-3xl">
                  <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} aly='' height={750} width={500} className="rounded-t-3xl" />
                  <div className="px-2 text-black text-center h-[50px] rounded-b-3xl">{movie.title}</div>
                </div>

              </div>
            </Link>
          </div>

        );
      })}
    </div>
    <div className="text-[30px] bg-black text-[#00ffff] py-5 pl-5">Toprated Movies</div>
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2 bg-black p-5">
      {toprated.map(movie => {
        return (
          <div key={movie.id} className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
            <Link href={`/tmovie/${movie.id}`}>
              <div>
                <div className="bg-white rounded-3xl">
                  <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} aly='' height={750} width={500} className="rounded-t-3xl" />
                  <div className="px-2 text-black text-center h-[50px] rounded-b-3xl">{movie.title}</div>
                </div>

              </div>
            </Link>
          </div>

        );
      })}
    </div>
    </>
  );
}


