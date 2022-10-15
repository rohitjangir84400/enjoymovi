import Homeslider from '../components/carousel'
import Counteranimation from '../components/counter_ani'
import Enjoy from '../components/enjoysection'
import Homewebslider from '../components/webcarousel'
import Videocontainer from '../components/videocontainer'
import Newssection from '../components/newssection'
import Joinsection from '../components/join'
import Movi from '../components/enjoy_movi'
import axios from 'axios'

export default function Home({upcoming , populartv}) {
  return (
     <>

      <Enjoy/>
      <Homeslider upcoming={upcoming.results}/>
      <Videocontainer/>
      <Homewebslider populartv={populartv.results}/>
      <Movi/>
      <Counteranimation/>
      <Newssection/>
      <Joinsection />

     </>
  )
}


export async function getStaticProps() {
  const respo=await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const upcoming=respo.data;
  const res = await axios(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const populartv = res.data;
  return {
    props: {
      upcoming,
      populartv,
    },
  }
}