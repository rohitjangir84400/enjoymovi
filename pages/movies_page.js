import Footer from "./components/footer";
import MovieList from "./components/movieslist";
import Navbar from "./components/navbar";
import axios from "axios";


export default function Movies_page({movie}){
    console.log(movie);
    return(
        <>
        <Navbar/>
        <MovieList movie={movie.results}/>
        <Footer/>
        </>
    );
}

export async function getStaticProps(){
    const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const movie = res.data
    return {
      props: {
        movie
      },
    }
  }
