import next from "next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import NextArrow from "./customnext";
import PreviousArrow from "./customprevious";
import { Data } from "./carouseldata";





export default function Homeslider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 500,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
    };
    return (
       <div className="p-20 w-full">
         <div className="py-4 text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            latest movies
         </div>
         <div>
            <Slider {...settings}>
                <div className="p-2">
                    <Image src={"/images/poster-1.jpg"} alt="image one" width={'276px'} height={'336px'} />
                </div>
                <div className="p-2">
                    <Image src={"/images/poster-2.jpg"} alt="image two" width={'276px'} height={'336px'}  />
                </div>
                <div className="p-2">
                    <Image src={"/images/poster-3.jpg"} alt="image three" width={'276px'} height={'336px'} />
                </div>
                <div className="p-2">
                    <Image src={"/images/poster-4.jpg"} alt="image four" width={'276px'} height={'336px'}  />
                </div>
                <div className="p-2">
                    <Image src={"/images/poster-1.jpg"} alt="image five" width={'276px'} height={'336px'}  />
                </div>
                <div className="p-2">
                    <Image src={"/images/poster-2.jpg"} alt="image one" width={'276px'} height={'336px'}  />
                </div>


            </Slider>
        </div>
       </div>
    );
}
