import axios from "axios";
import Celebs from "../components/celebslist";

export default function celebs_page({latestcelebs}){
    console.log(latestcelebs);
    return<Celebs latestcelebs={latestcelebs.results}/>
}


export async function getStaticProps(){
    const res = await axios(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const latestcelebs = res.data;
    return {
      props: {
        latestcelebs
      },
    }
  }
