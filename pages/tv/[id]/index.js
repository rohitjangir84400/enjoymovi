import axios from "axios";
import Image from "next/image";

export default function Movie({poptv,tvvideo}){
  console.log(poptv);
  console.log(tvvideo);
    return(
      <div>
        <div>
              <Image src={`https://image.tmdb.org/t/p/w500${poptv.poster_path}`} height={200} width={200}/>
                <div>{poptv.name}</div>
              </div>
              {tvvideo.map(tvvideoid=>{
                return(
                  <div>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${tvvideoid.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                  </div>
                );
              })}
      </div>
    );
}

export async function getStaticProps(context){
    const {id}=context.params;
    const res = await axios(`https://api.themoviedb.org/3/tv/${id}?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const poptv = res.data;
    const tvvideos = await axios(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const tvvideo = tvvideos.data.results;
    return {
      props: {
        poptv,
        tvvideo,
      },
    }
  }


  export async function getStaticPaths(){
    const res = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const tvdetails = res.data.results;
    const ids=tvdetails.map(details=>details.id);
    const paths=ids.map(id=>({params:{id:id.toString()}}));
    return{
      paths,
      fallback: false,
    }
  }