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


export default function Home() {
  return (
     <>
      <Navbar/>
      <Enjoy/>
      <Homeslider/>
      <Videocontainer/>
      <Homewebslider/>
      <Movi/>
      <Counteranimation/>
      <Newssection/>
      <Joinsection />
      <Footer/>

     </>
  )
}
