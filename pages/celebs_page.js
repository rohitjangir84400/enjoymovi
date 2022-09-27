import Navbar from "./components/navbar";
import Footer from "./components/footer";
import axios from "axios";
import Celebs from "./components/celebslist";

export default function celebs_page({latestcelebs}){
    console.log(latestcelebs);
    return(
        <>
        <Navbar/>
         <Celebs latestcelebs={latestcelebs.results}/>
        <Footer/>
        </>
    );
}


export async function getStaticProps(){
    const res = await axios(`https://api.themoviedb.org/3/person/popular?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const latestcelebs = res.data;
    return {
      props: {
        latestcelebs
      },
    }
  }
