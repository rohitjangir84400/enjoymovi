import Footer from "./components/footer";
import TvList from "./components/tvlist";
import Navbar from "./components/navbar";
import axios from "axios";


export default function Tv_page({ populartv }) {
  console.log(populartv);
  return (
    <>
      <Navbar />
      <div className="text-[50px] bg-black text-[#00ffff] py-5 pl-5">Popular Tv Shows</div>
      <TvList populartv={populartv.results} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
  const populartv = res.data
  return {
    props: {
      populartv
    },
  }
}
