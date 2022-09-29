import axios from "axios";
import Image from "next/image";

export default function Movie({ movies, movievideo }) {
  console.log(movies);
  console.log(movievideo);
  return (
    <>
      <div>
        <div>
          <Image src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} height={500} width={400} />
        </div>
        <div>{movies.title}</div>
        <div>{movies.overview}</div>
        <div>
          {movies.production_companies.map(id => {
            return (
              <div>{id.name}</div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-3">
        {movievideo.map(videoid => {
          return (
            <div className="">
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoid.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
  const movies = res.data
  const videodata = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
  const movievideo = videodata.data.results;
  return {
    props: {
      movies,
      movievideo,
    },
  }
}

export async function getStaticPaths() {
  const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`);
  const movie = res.data.results;
  const ids = movie.map(movi => movi.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  }
}