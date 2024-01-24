'use client'

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaStar } from "react-icons/fa";


const Details = () => {
    const searchParams = useSearchParams();
    const picture = searchParams.get('picture');
    const country = searchParams.get("country");
    const location = searchParams.get('location');
    const distance = searchParams.get('distance');
    const price  = searchParams.get("price")
    return (
        <div className="container grid grid-cols-2 mt-[2em]">
            <div className="">
                <h1 className="font-semibold text-[25px]">{country}-{location}</h1>
                <Image
                    className="rounded-xl cover"
                    src={picture ? picture : 'picture'}
                    alt="picture"
                    width={800}
                    height={480}
                />
                <p className="font-semibold text-[20px] mt-[0.5em]">Room In {country}-{location}</p>
                <div className="flex  items-center gap-[10px] text-[#222222]">
                    <div className="flex items-center gap-[3px]">
                        <FaStar size={19} /> <span>2.75</span>
                    </div>
                    <div className="border-b-[1px] border-black p-0 m-0 cursor-pointer">183 reviews</div>
                </div>
            </div>
            <div className="w-[90%] border-[1px] mx-auto rounded-xl ">
                <h1 className="font-semibold text-[40px] w-[70%] mx-auto pt-[1em]">{price} <span className="font-normal text-[26px]">night</span></h1>
                <div className="grid grid-cols-2 w-[70%] mx-auto mt-[2em]">
                    <div>1</div>
                    <div>2</div>
                    <div className="w-[100%] bg-red-400 col-start-1 col-end-3">3</div>
                    <button className="w-[100%] bg-red-400 col-start-1 col-end-3 mt-[1em] h-[2.5em] rounded-l">Reserve</button>
                </div>
            </div>
        </div>
    )
}

export default Details;