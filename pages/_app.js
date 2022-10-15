import '../styles/globals.css'
import Footer from './components/footer';
import Meta from './components/meta';
import Navbar from './components/navbar';
import next from 'next';

function MyApp({ Component, pageProps }) {
  return(
    <div className="bg-[#010d1a]">
      <Meta title='Enjoymovie/Home' />
      <Navbar/>
      <Component {...pageProps}/>
      <Footer/>
    </div>
  );
}

export default MyApp
