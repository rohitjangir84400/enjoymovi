import axios from "axios";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Movie({ toptv, tvvideo }) {
    console.log(toptv);
    console.log(tvvideo);
    return (
        <div>
            <Navbar />

            <div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white sm:text-[50px] text-[20px] py-10 lg:px-[50px] px-2">
                Tv Show Details
            </div>


            <div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white lg:px-[100px] px-5 mb-[100px]">
                <div className="flex flex-wrap ">
                    <div className="basis-12/12 lg:basis-1/3 lg:order-1 order-2 mb-[-70px] rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]">
                        <Image src={`https://image.tmdb.org/t/p/w500${toptv.poster_path}`} alt="failed to load" height={480} width={355} className="rounded-3xl" />
                    </div>
                    <div className="basis-12/12 lg:basis-2/3 lg:order-2 order-1 w-full py-10 lg:pl-[100px] pl-2 font-thin">
                        <div className="sm:text-[50px] text-[20px] ">{toptv.name}</div>
                        <div className="py-5">{toptv.tagline}</div>
                        <div className="py-2">{toptv.status} | {toptv.type}
                            {toptv.genres.map(gen => {
                                return (
                                    <> | {gen.name} </>
                                );
                            })}
                            {toptv.seasons.map(sea => {
                                return (
                                    <> | {sea.name} | {sea.episode_count} Episodes</>
                                );
                            })}

                        </div>
                        <div>{toptv.popularity} Ratings | {toptv.vote_average} Average Votes</div>
                    </div>
                </div>
            </div>



            <div className="px-[50px] flex flex-wrap mb-10">
                <div className="lg:basis-2/3 basis-12/12">
                    <div className="text-[50px] font-thin ">Storyline</div>
                    <div className="text-[#948a99] py-10 px-2">
                        {toptv.overview}
                    </div>
                </div>
                <div className="border lg:basis-1/3 basis-12/12 p-5">
                    <div>
                        <span className="text-[25px] font-thin">Production Companies</span>
                        {toptv.production_companies.map(camp => {
                            return (
                                <div className="text-[#948a99] font-thin py-2" key={camp.id} > - {camp.name} , {camp.origin_country}</div>
                            );
                        })}
                    </div>
                    <div>
                        <span className="text-[25px] font-thin">Production Countries</span>
                        {
                            toptv.production_countries.map(coun => {
                                return (
                                    <div className="text-[#948a99] font-thin py-2" key={coun.id}> - {coun.name}</div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>


            <div className="px-[50px]">
                <div className="sm:text-[50px] text-[20px] font-thin pb-10">
                    Created By
                </div>
                <div className="flex">
                    {
                        toptv.created_by.map(dir => {
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
            </div>


            <div className="lg:px-[50px] px-5 py-10 bg-black text-white">
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
            <Footer />
        </div>
    );
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const res = await axios(`https://api.themoviedb.org/3/tv/${id}?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const toptv = res.data;
    const tvvideos = await axios(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const tvvideo = tvvideos.data.results;
    return {
        props: {
            toptv,
            tvvideo,
        },
    }
}


export async function getStaticPaths() {
    const res = await axios(`https://api.themoviedb.org/3/tv/top_rated?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const tvdetails = res.data.results;
    const ids = tvdetails.map(details => details.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }));
    return {
        paths,
        fallback: false,
    }
}