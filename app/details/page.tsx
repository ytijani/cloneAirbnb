'use client'

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { useState } from "react";
import Buy from "../help/Buy";


const Details = () => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);


    const searchParams = useSearchParams();
    const picture = searchParams.get('picture');
    const country = searchParams.get("country");
    const location = searchParams.get('location');
    const distance = searchParams.get('distance');
    const price = searchParams.get("price")



    return (
        <div className="container grid grid-cols-1 gap-[1.5em] lg:grid-cols-2 lg:gap-[0px] mt-[2em] justify-center ">
            <div className="w-[80%] mx-auto lg:w-[100%] lg:mx-[0]">
                <div className="ml-[10px] mb-[10px]">
                    <h1 className="font-semibild text-[20px]">{country}-{location}</h1>
                    <p className="font-normal   text-[#aaa]">hosted By name</p>
                </div>
                <Image
                    className="rounded-xl cover h-[40vh] lg:h-[60vh]"
                    src={picture ? picture : 'picture'}
                    alt="picture"
                    width={800}
                    height={480}
                />
                <p className="font-semibold text-[20px] mt-[0.5em]">Room In {country}-{location}</p>
                <div className="flex gap-[1em] items-center border-[1px] my-[10px] py-[0.5em] px-[1em] rounded-xl">
                    <Image
                        src="https://a0.muscache.com/im/pictures/user/dccf09ab-2500-4f98-8cfd-d81edbeef589.jpg?im_w=240"
                        width={30}
                        height={30}
                        alt="picture"
                        className="rounded-[50%]"
                    />
                    <div className="flex flex-col">
                        <p className="text-[15px]">Hosted by Reserva Alecrim</p>
                        <p className="font-normal text-[#818181] text-[10px]">6 years hosting</p>
                    </div>

                </div>
                <div className="flex  items-center gap-[10px] text-[#222222]">
                    <div className="flex items-center gap-[3px]">
                        <FaStar size={19} /> <span>2.75</span>
                    </div>
                    <div className="border-b-[1px] border-black p-0 m-0 cursor-pointer">183 reviews</div>
                </div>
            </div>
            <Buy adults={adults} children={children} infants={infants} pets={pets} setAdults={setAdults} setChildren={setChildren} setInfants={setInfants} setPets={setPets} price={price} />
        </div>
    )
}





export default Details;