
import MovieList from "../components/movieslist";
import axios from "axios";


export default function Movies_page({ movie , toprated , upcoming}) {
  console.log(movie);
  console.log(toprated);
  console.log(upcoming);
  return<MovieList movie={movie.results} toprated={toprated.results} upcoming={upcoming.results}/>
}

export async function getStaticProps() {
  const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movie = res.data
  const resp=await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const toprated=resp.data
  const respo=await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const upcoming=respo.data
  return {
    props: {
      movie,
      toprated,
      upcoming,
    },
  }
}
