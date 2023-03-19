import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/solid'


export default function Enjoy() {
  return (
    <div className="min-h-[550px] max-h-[1000px] h-[100vh] flex items-center md:items-end" style={{
      backgroundImage: `url('/images/hero-bg.jpg')`, backgroundPosition: "center", backgroundSize: "cover",
    }}>
      <div className="p-[10px] md:p-[30px] text-white">
        <div className="text-[#e2d703] text-[24px] font-[700] mt-2">Enjoymovi</div>
        <div className="text-[46px] md:text-[66px] font-[700] mb-4">Unlimited <span className="text-[#e2d703]">Movie</span>,<br/>TVs Shows, & More.</div>
        <div></div>
        <div className="flex flex-wrap"><div className="border px-2">HD</div> <div className='px-2'>Romence, Drama</div> <div className='flex items-center'><CalendarDaysIcon className='mx-2 h-5 w-5 fill-[#e2d703]'/>2022</div> <div className='flex items-center'> <ClockIcon className='h-5 w-5 mx-2 fill-[#e2d703]'/>138 min</div></div>
        <div className='mt-10 border-2 border-[#e2d703] rounded-2xl inline-block py-3 px-5 bg-black'>WATCH NOW</div>
      </div>
    </div>
  );
}



