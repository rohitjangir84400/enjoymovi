import Image from "next/image";
import Link from "next/link";

export default function TvList({ populartv }) {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2 bg-black p-5">
      {populartv.map(populartv => {
        return (
          <div key={populartv.id}className="hover:cursor-pointer hover:scale-90 transition duration-700 ease-in-out">
            <Link href={`/tv/${populartv.id}`}>
              <div className="bg-white rounded-lg">
                <Image src={`https://image.tmdb.org/t/p/w500${populartv.poster_path}`} alt='' height={305} width={240} className="rounded-t-lg" />
                <div className="px-2 bg-white text-black overflow-hidden h-[50px] rounded-b-lg">{populartv.name}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

