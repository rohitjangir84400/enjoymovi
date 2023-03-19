
import Tranding from "../components/trandinglist";
import axios from "axios";
import Enjoy from "../components/enjoysection";


export default function Tranding_page({trandingdata}) {
  console.log(trandingdata)
  return(
    <div>
      <Enjoy/>
      <Tranding trandingdata={trandingdata.results}/>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const trandingdata = res.data
  return {
    props: {
      trandingdata,
    },
  }
}
