import '../styles/globals.css'
import Footer from '../components/footer';
import Meta from "../components/meta";
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return(
    <div className="">
      <Meta title='Enjoymovie/Home' />
      <Navbar/>
      <Component {...pageProps}/>
      <Footer/>
    </div>
  );
}

export default MyApp

// bg-[#010d1a]