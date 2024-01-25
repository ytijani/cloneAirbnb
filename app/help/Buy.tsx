'use client'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Popper from "../help/Popper";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';


const Buy = ({ adults, children, infants, pets, setAdults, setChildren, setInfants, setPets, price }: any) => {

    const [open, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!open);
    }

    return (
        <div className="w-[90%] border-[1px] mx-auto rounded-[50px] flex justify-center flex-col ">
            <h1 className="font-medium text-[30px] w-[70%] mx-auto pt-[1em]">{price} <span className="font-normal text-[26px]">night</span></h1>
            <div className="w-[70%] mx-auto mt-[1em]">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangePicker']}>
                        <DateRangePicker
                            localeText={{ start: 'Check-in', end: 'Check-out' }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
                <div className="flex flex-col gap-[5px]">
                    <button onClick={handleClick} className="py-[0.7em] border-[1px] border-[#aaa] mt-[1em] rounded-[5px] w-[100%] ">
                        <div className="w-[90%] mx-auto flex justify-between items-center cursor-pointer ">
                            <p className="text-[14px] font-semibold ">Guests</p>
                            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </button>
                    {open ? <div className="py-[0.7em] border-[1px] border-[#aaa] rounded-[5px] w-[100%]">
                        <Popper adults={adults} children={children} infants={infants} pets={pets} setAdults={setAdults} setChildren={setChildren} setInfants={setInfants} setPets={setPets} />
                    </div> : ""}
                </div>
                <button className="w-[100%] bg-[#e41c5a] text-white col-span-2 mt-[1em] h-[2.9em] rounded-xl font-semibold hover:shadow-md">Reserve</button>
                <p className="text-[10px] text-center font-semibold mt-[10px] mt-[1em]">You won&#39;t be charged yet</p>
                <div className="border-b-[1px] border-[#aaa] mt-[3em] font-semibold pb-[1.5em]">
                    <p className="mb-[1em] flex justify-between items-center"><p>Total Guests :</p> {adults + children + infants + pets}</p>
                    <p className="flex justify-between items-center"> <p>Total : </p>{adults + children + infants + pets + 62}$</p>
                </div>
                <div className="flex justify-between items-center mt-[2em] font-bold">
                    <p className="">Total before taxes : </p>
                    <p>{adults + children + infants + pets + 62}$</p>
                </div>
            </div>
        </div>
    )
}
export default Buy;