import TvList from "../components/tvlist";
import axios from "axios";


export default function Tv_page({ populartv , topratedtv , latesttvshow }) {
  console.log(populartv);
  console.log(topratedtv);
  console.log(latesttvshow);
  return<TvList populartv={populartv.results} topratedtv={topratedtv.results} latesttvshow={latesttvshow.results} />
}

export async function getStaticProps() {
  const res = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const populartv = res.data;
  const resp = await axios(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const latesttvshow = resp.data;
  const respo = await axios(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const topratedtv = respo.data;
  return {
    props: {
      populartv,
      latesttvshow,
      topratedtv,
    },
  }
}
