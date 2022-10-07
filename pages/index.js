import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homeslider from './components/carousel'
import Counteranimation from './components/counter_ani'
import Enjoy from './components/enjoysection'
import Navbar from './components/navbar'
import Homewebslider from './components/webcarousel'
import Videocontainer from './components/videocontainer'
import Newssection from './components/newssection'
import Joinsection from './components/join'
import Footer from './components/footer'
import Movi from './components/enjoy_movi'
import axios from 'axios'


export default function Home({upcoming , populartv}) {
  return (
     <>
      <Navbar/>
      <Enjoy/>
      <Homeslider upcoming={upcoming.results}/>
      <Videocontainer/>
      <Homewebslider populartv={populartv.results}/>
      <Movi/>
      <Counteranimation/>
      <Newssection/>
      <Joinsection />
      <Footer/>

     </>
  )
}


export async function getStaticProps() {
  const respo=await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`);
  const upcoming=respo.data;
  const res = await axios(`https://api.themoviedb.org/3/tv/top_rated?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`);
  const populartv = res.data;
  return {
    props: {
      upcoming,
      populartv,
    },
  }
}