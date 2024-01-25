'use client'

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { IoIosArrowDown } from "react-icons/io";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


const Details = () => {

    const searchParams = useSearchParams();
    const picture = searchParams.get('picture');
    const country = searchParams.get("country");
    const location = searchParams.get('location');
    const distance = searchParams.get('distance');
    const price = searchParams.get("price")
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
                <div className="w-[70%] mx-auto mt-[2em]">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateRangePicker']}>
                            <DateRangePicker
                                localeText={{ start: 'Check-in', end: 'Check-out' }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    <div className="py-[0.7em] border-[1px] border-[#aaa] mt-[1em] rounded-[5px] ">
                        <div className="w-[90%] mx-auto flex justify-between items-center cursor-pointer">
                            <p className="text-[14px] font-semibold ">Guests</p>
                            <IoIosArrowDown className="" />
                        </div>
                    </div>
                    {/* <button className="w-[100%] bg-red-400 col-span-2 mt-[1em] h-[2.5em] rounded-l">Reserve</button> */}
                </div>
            </div>
        </div>
    )
}

export default Details;