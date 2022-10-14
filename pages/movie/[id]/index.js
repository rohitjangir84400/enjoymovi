import axios from "axios";
import Image from "next/image";

export default function Movie({ movies, movievideo }) {
  console.log(movies);
  console.log(movievideo);
  return (
    <>
      <div className="container max-w-4xl mx-auto pt-6 text-white">
        {/* <Meta title={movies.title} /> */}
        <div className="sm:text-[50px] text-[30px] py-10 px-3">
          Movie Details
        </div>
        <div className="px-3 text-gray-600">
          <Image src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} width={1000} height={1100} className="rounded-md" alt={movies.title} />
          <h1 className="font-bold text-[30px] text-white my-2">{movies.title}</h1>
          <p className=" text-sm mt-4">{movies.overview}</p>
          <p className="mt-5 text-sm">Genres: <span className="font-bold">{movies.genres.map(genre => genre.name).join(', ')}</span></p>
          <p className="text-sm">Release Date: <span className="font-bold">{movies.release_date}</span></p>
        </div>
        <div className="px-3 py-10">
          <div className="sm:text-[50px] text-[30px] font-thin pb-10">Related Videos</div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
            {movievideo.map(videoid => {
              return (
                <div key={videoid.id} className="">
                  <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoid.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              );
            })}
          </div>
        </div>
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



