import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";


export default function Articles(){
    const[isloading,setIsLoading]=useState(true);
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    function fetchData(){
        axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed')
        .then((response)=>setPosts(response.data))
        .catch((error)=>console.log(error));
        setIsLoading(false);
    }

    if(isloading){
        return(
             <div className="md:text-[20px] text-[7px] text-white">
                Please wait while loading...
             </div>
        );
    }

    return(
        <>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 p-5 text-black">
            {posts.map(Post => {
              return (
                <div key={Post.id} className="group cursor-pointer hover:scale-90 transition duration-700 ease-in-out bg-white py-5 rounded-md">
                  <Link href={Post.link}>
                    <div>
                      {/* <Image src={Post.jetpack_featured_media_url} alt="failed to load" height={750} width={500} /> */}
                      {/* <div>{Post.}</div> */}
                      <div className="invisible group-hover:visible px-2 my-2">{Post.date}</div>
                      <div className="px-2 h-[50px] transition duration-700 ease-in-out m-2">{Post.title.rendered}</div>
                      
                    </div>
                  </Link>
                </div>
              );
            })}
         </div>
        </>
    )
}