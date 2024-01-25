
'use client'
import Link from "next/link";
import { Steps } from "../components/SearchBar";
import Popper from "./Popper";
import { useState } from "react";


const AddGuest = (props: any) => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);

    return (
        <div className="">
            <button onClick={props.close} className=' bg-[#ff385c] rounded-full w-[20px] h-[20px] text-[15px] text-white flex justify-center items-center '>
                <span>&times;</span>
            </button>
            <h1 className='text-center border-b-[1px] font-semibold'>Select Your Date</h1>
            <Popper  adults={adults} children={children} infants={infants} pets={pets} setAdults={setAdults} setChildren={setChildren} setInfants={setInfants} setPets={setPets}/>
            <div className='flex w-[100%] items-center jusstify-center gap-[1em]'>
                <button className='border-[1px] py-[10px] font-semibold rounded-lg hover:shadow-md w-[49%]' onClick={() => props.setStep(Steps.Date)}>Back</button>
                <Link  href="/search" className='bg-[#ff385c] py-[10px] text-white rounded-lg hover:shadow-md w-[49%] text-center'  >
                    <span onClick={props.close}></span>
                </Link>
            </div>
        </div>

    )
}

export default AddGuest