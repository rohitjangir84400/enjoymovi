import Image from "next/image";
import Link from "next/link";

export default function TvList({ latesttvshow , topratedtv , populartv }) {
  return (
   <>
   <div className="text-[30px] bg-black text-[#00ffff] py-5 pl-5">Latest Tv</div>
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 bg-black p-5">
      {latesttvshow.map(latesttv => {
        return (
          <div key={latesttv.id}className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
            <Link href={`/tv/${populartv.id}`}>
              <div className="bg-white rounded-3xl">
                <Image src={`https://image.tmdb.org/t/p/w500${latesttv.poster_path}`} alt='' height={750} width={500} className="rounded-t-3xl" />
                <div className="px-2 text-black text-centerx h-[50px] rounded-b-3xl">{latesttv.name}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
    <div className="text-[30px] bg-black text-[#00ffff] py-5 pl-5">Popular Tv</div>
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 bg-black p-5">
      {populartv.map(populartv => {
        return (
          <div key={populartv.id}className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
            <Link href={`/tv/${populartv.id}`}>
              <div className="bg-white rounded-3xl">
                <Image src={`https://image.tmdb.org/t/p/w500${populartv.poster_path}`} alt='' height={750} width={500} className="rounded-t-3xl" />
                <div className="px-2 text-black text-centerx h-[50px] rounded-b-3xl">{populartv.name}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
    <div className="text-[30px] bg-black text-[#00ffff] py-5 pl-5">Toprated Tv</div>
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 bg-black p-5">
      {topratedtv.map(toptv => {
        return (
          <div key={toptv.id}className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
            <Link href={`/tv/${toptv.id}`}>
              <div className="bg-white rounded-3xl">
                <Image src={`https://image.tmdb.org/t/p/w500${toptv.poster_path}`} alt='' height={750} width={500} className="rounded-t-3xl" />
                <div className="px-2 text-black text-centerx h-[50px] rounded-b-3xl">{toptv.name}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
   </>
  );
}

