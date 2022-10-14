import axios from "axios";
import Image from "next/image";


export default function Latesttv({ latesttv, tvvideo, tvreview }) {
    console.log(latesttv);
    console.log(tvvideo);
    console.log(tvreview);
    return (
        <>
            

            <div className="sm:text-[50px] text-[20px] py-10 lg:px-[50px] px-2">
                Tv Show Details
            </div>

            
            <div className="container max-w-4xl mx-auto pt-6 text-white ">
        {/* <Meta title={movies.title} /> */}

        <div className="px-3">
          <Image src={`https://image.tmdb.org/t/p/original${latesttv.poster_path}`} width={1000} height={600} className="rounded-md" alt={latesttv.name} />
          <h1 className="font-bold text-xl my-2">{latesttv.name}</h1>
          <p className="text-gray-600 text-sm mt-4">{latesttv.tagline}</p>
          <p className="text-gray-600 text-sm mt-4">{latesttv.overview}</p>
          <p className="text-gray-600 text-sm mt-4">Type : {latesttv.type}</p>
          <p className="text-gray-600 text-sm mt-4">Status : {latesttv.status}</p>
          <p className="mt-5 text-gray-600 text-sm">Genres: <span className="font-bold">{latesttv.genres.map(genre => genre.name).join(', ')}</span></p>
          <p className="text-gray-600 text-sm">Season : <span className="font-bold">{latesttv.seasons.map(season => season.name).join(', ')}</span></p>
          <p className="text-gray-600 text-sm">Episodes : <span className="font-bold">{latesttv.seasons.map(season => season.episode_count).join(', ')}</span></p>
        </div>

      </div>








        




            {/* <div className="px-[50px]">
                <div className="sm:text-[50px] text-[20px] font-thin pb-10">
                    Created By
                </div>
                <div className="flex">
                    {
                        latesttv.created_by.map(dir => {
                            return (
                                <div className="mr-5">
                                    <Image src={`https://image.tmdb.org/t/p/w500${dir.profile_path}`} alt="failed to load" height={200} width={140} className="rounded-3xl" />
                                    <div className="py-3 text-center">
                                        {dir.name}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div> */}

           
            <div className="lg:px-[50px] px-5 py-10 text-white">
                <div className="sm:text-[50px] text-[20px] font-thin pb-10">Related Videos</div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                    {tvvideo.map(videoid => {
                        return (
                            <div key={videoid.id} className="">
                                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoid.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
    const res = await axios(`https://api.themoviedb.org/3/tv/${id}?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const latesttv = res.data;
    const tvvideos = await axios(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const tvvideo = tvvideos.data.results;
    return {
        props: {
            latesttv,
            tvvideo,
        },
    }
}


export async function getStaticPaths() {
    const res = await axios(`https://api.themoviedb.org/3/tv/airing_today?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const tvdetails = res.data.results;
    const ids = tvdetails.map(details => details.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }));
    return {
        paths,
        fallback: false,
    }
}