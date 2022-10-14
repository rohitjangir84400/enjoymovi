import next from "next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from "next/link";





export default function Homeslider({ upcoming }) {
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
    <div className="p-10">
      <div className="py-4 text-[30px] sm:text-[50px] text-white">
        Watch Movies
      </div>
      <div>
        <Slider {...settings}>
          {upcoming.map(movi => {
            return (
              <Link href="/movies_page" key={movi.id}>
                <div className="p-3 hover:scale-[1.15] transition duration-700 ease-in-out hover:cursor-pointer">
                  <Image src={`https://image.tmdb.org/t/p/w500${movi.poster_path}`} alt="failed to load" height={750} width={500} className="" />
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
