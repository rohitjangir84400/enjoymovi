import '../styles/globals.css'
import Footer from './components/footer';
import Navbar from './components/navbar';

function MyApp({ Component, pageProps }) {
  return(
    <div className="bg-[#010d1a]">
      <Navbar/>
      <Component {...pageProps}/>
      <Footer/>
    </div>
  );
}

export default MyApp
