import axios from "axios";
import Image from "next/image";

export default function Movie({latestcelebs}){
  console.log(latestcelebs);
    return(
      <div>
        <div>
                <Image src={`https://image.tmdb.org/t/p/w500${latestcelebs.profile_path}`} height={200} width={200}/>
              </div>
              <div>{latestcelebs.name}</div>
      </div>
    );
}

export async function getStaticProps(context){
    const {id} = context.params;
    const res = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const latestcelebs = res.data;
    return {
      props: {
        latestcelebs
      },
    }
  }


  export async function getStaticPaths(){
    const res = await axios(`https://api.themoviedb.org/3/person/popular?api_key=ce217ac5c7994fea51a1b02246f379c5&language=en-US&page=1`)
    const celebsdetails = res.data.results;
    const ids=celebsdetails.map(celebsdetail=>celebsdetail.id);
    const paths=ids.map(id=>({params:{id:id.toString()}}));
    return{
      paths,
      fallback: false,
    }
  }