import Image from "next/image";
import Link from "next/link";

export default function TvList({populartv}){
    return(
      <div>
        <div>Popular Tv shows</div>
        {populartv.map(populartv=>{
          return(
             <div>
              <Link href={`/tv/${populartv.id}`}>
              <div>
              <Image src={`https://image.tmdb.org/t/p/w500${populartv.poster_path}`} height={200} width={200}/>
                <div>{populartv.name}</div>
              </div>
              </Link>
             </div>
          );
        })}
      </div>
    );
}

