import axios from "axios";
import Image from "next/image";

export default function Celebs({ latestcelebs, latestcelebsimg }) {
  console.log(latestcelebs);
  console.log(latestcelebsimg);
  return (
    <>


    <div className="container max-w-4xl mx-auto pt-6 text-white">
        {/* <Meta title={movies.title} /> */}

        <div className="px-3">
          <Image src={`https://image.tmdb.org/t/p/original${latestcelebs.profile_path}`} width={1000} height={600} className="rounded-md" alt="failed to load" />
          <h1 className="font-bold text-xl my-2">{latestcelebs.name}</h1>
          <p className="text-gray-600 text-sm mt-4">{latestcelebs.biography}</p>
          <p className="mt-5 text-gray-600 text-sm">Department : {latestcelebs.known_for_department}</p>
          <p className="text-gray-600 text-sm">Date Of Birth : {latestcelebs.birthday}</p>
          <p className="text-gray-600 text-sm">Place Of Birth : {latestcelebs.place_of_birth}</p>
          <p className="text-gray-600 text-sm">Popularity : {latestcelebs.popularity}</p>
        </div>

      </div>


      <div>
      <div className="sm:text-[50px] text-[20px] font-thin p-5">Gallery</div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 p-5 ">
        {latestcelebsimg.profiles.map((img , i) => {
          return (
            <div key={i}> 
              <Image src={`https://image.tmdb.org/t/p/w500${img.file_path}`} alt="failed to load" height={750} width={500} className="rounded-3xl hover:scale-90 transition duration-700 ease-in-out" />
            </div>
          );
        })}
      </div>
      </div>
    </>
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