import Footer from "./components/footer";
import Tranding from "./components/trandinglist";
import Navbar from "./components/navbar";
import axios from "axios";


export default function Tranding_page({trandingdata}) {
  console.log(trandingdata)
  return (
    <>
      <Navbar />
      
      <Tranding trandingdata={trandingdata.results}/>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
  const trandingdata = res.data
  return {
    props: {
      trandingdata,
    },
  }
}