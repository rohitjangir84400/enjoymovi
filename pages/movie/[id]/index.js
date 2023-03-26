import axios from "axios";
import Image from "next/image";
import Meta from "../../../components/meta";
import { CalendarDaysIcon, StarIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function Movie({ movies, movievideo }) {
  console.log(movies);
  console.log(movievideo);
  return (
    <>
      <Meta title={movies.title} />
      <div className="" style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movies.backdrop_path}')`, backgroundPosition: "center", backgroundSize: "cover",
      }} >
        <div className="bg-[hsl(207,19%,11%)]/[0.9] py-[100px] px-5">

          <div className="h-[100%] flex gap-10">
            <div className="basis-[3/12]">
              <div className="text-[14px] h-[100%] p-2 hover:cursor-pointer">
                <div className="flex flex-col justify-center">
                  <div className="overflow-hidden aspect-[2/3] relative mb-2" >
                    <Image className=" rounded-md" src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} alt="failed to load"
                      layout="fill" objectFit="cover" />
                  </div>
                  <div className="text-white">
                    <div className="flex justify-between items-center gap-[5px] mb-3">
                      <div className="w-[60%] font-bold hover:text-[#e2d703]">{movies.title}</div>
                      <div className="flex items-center gap-2"><CalendarDaysIcon className="h-5 w-5 fill-[#e2d703]" />{movies.release_date}</div>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="border-2 py-1 px-2 text-[#e2d703]">
                        {movies.original_language}
                      </div>
                      <div className="flex justify-between items-center gap-5">
                        <div className="flex items-center gap-2  text-[14px]"><ClockIcon className="h-5 w-5 fill-[#e2d703]" />{movies.runtime}</div>
                        <div className="flex items-center gap-2"><StarIcon className="h-5 w-5 fill-[#e2d703]" />{movies.vote_average}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-[9/12]">
              <div className="text-[46px] text-[#e2d703] font-bold">{movies.original_title}</div>
              <div className="text-[12px] text-white border border-[#e2d703] rounded-lg p-5">{movies.overview}</div>
              <div className="border border-[#e2d703] w-fit py-3 px-1 rounded-lg text-white mt-2"><span className="text-[#e2d703]">Revenue:</span> {movies.revenue}</div>
              <div className="border border-[#e3d703] px-2 py-3 rounded-lg mt-2 w-fit text-[#e2d703]">{movies.status}</div>
              <div className="text-white mt-2">Production Companies</div>
              <div className="flex gap-2 mt-2">{
                movies.production_companies.map(com => {
                  return (
                    <div key={com.id} className="bg-white rounded-lg flex flex-col">
                      <div className=''>
                        <div className=""><Image src={`https://image.tmdb.org/t/p/original${com.logo_path}`} alt="failed to load" height={100} width={100} /></div>
                        <div className="bg-black text-white rounded-lg p-2"><div>
                          {com.name}
                        </div>
                          <div>{com.origin_country}</div></div>
                      </div>
                    </div>
                  );
                })
              }
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="sm:text-[50px] text-[30px] font-bold py-[50px] text-white">Related Videos</div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
              {movievideo.map(videoid => {
                return (
                  <div key={videoid.id} className="">
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoid.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                );
              })}
            </div>
          </div>
        </div>



      </div>


    </>




  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data
  const videodata = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movievideo = videodata.data.results;
  return {
    props: {
      movies,
      movievideo,
    },
  }
}

export async function getStaticPaths() {
  const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movie = res.data.results;
  const ids = movie.map(movi => movi.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  }
}



