import Image from "next/image";
import Link from "next/link";

export default function Celebs({latestcelebs}){
    return(
        <>
          {latestcelebs.map(
            latestcelebs=> {
                return(
                    <Link href={`/celeb/${latestcelebs.id}`}>
                    <div>
                        <div><Image src={`https://image.tmdb.org/t/p/w500${latestcelebs.profile_path}`} height={200} width={200}/></div>
                        {latestcelebs.name}
                    </div>
                    </Link>
                );
            }
          )}
        </>
    );
}