import axios from "axios";
import Image from "next/image";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Movie({ latestcelebs, latestcelebsimg }) {
  console.log(latestcelebs);
  console.log(latestcelebsimg);
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap items-center px-5 md:py-[70px] py-5">
        <div className="basis-12/12 lg:basis-1/4 md:order-1 order-2 rounded-b-3xl md:rounded-t-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]">
          <Image src={`https://image.tmdb.org/t/p/w500${latestcelebs.profile_path}`} alt="failed to load" height={480} width={355} className="md:rounded-t-3xl rounded-b-3xl" />
        </div>
        <div className="basis-12/12 lg:basis-3/4 md:order-2 order-1 w-full"><div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white md:text-[50px] text-[45px] py-10 px-5 w-full md:rounded-r-[50%]">{latestcelebs.name}</div></div>
      </div>

      <div className="text-[#948a99] py-10 px-5">
        {latestcelebs.biography}
        <div className="text-black font-thin pt-5 ">Department : {latestcelebs.known_for_department}</div>
        <div className="text-black font-thin py-2">Date Of Birth : {latestcelebs.birthday}</div>
        <div className="text-black font-thin py-2">Place Of Birth : {latestcelebs.place_of_birth}</div>
        <div className="text-black font-thin py-2">Popularity : {latestcelebs.popularity}</div>
      </div>

      <div></div>


      <div className="sm:text-[50px] text-[20px] font-thin p-5">Gallery</div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 p-5 ">
        {latestcelebsimg.profiles.map(img => {
          return (
            <>
              <Image src={`https://image.tmdb.org/t/p/w500${img.file_path}`} alt="failed to load" height={750} width={500} className="rounded-3xl hover:scale-90 transition duration-700 ease-in-out" />
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
  const latestcelebs = res.data;
  const resp = await axios(`https://api.themoviedb.org/3/person/${id}/images?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
  const latestcelebsimg = resp.data;
  return {
    props: {
      latestcelebs,
      latestcelebsimg,
    },
  }
}


export async function getStaticPaths() {
  const res = await axios(`https://api.themoviedb.org/3/person/popular?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
  const celebsdetails = res.data.results;
  const ids = celebsdetails.map(celebsdetail => celebsdetail.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  }
}