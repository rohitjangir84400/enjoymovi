import Image from "next/image";
import Link from "next/link";

export default function MovieList({movie}){
    return(
      <div>
        <div>Popular movies</div>
        {movie.map(movie=>{
          return(
            <div>
              <Link href={`/movie/${movie.id}`}>
              <div>
              <div>
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} height={200} width={200}/>
              </div>
              <div>{movie.title}</div>
              </div>
              </Link>
            </div>
             
          );
        })}
      </div>
    );
}


