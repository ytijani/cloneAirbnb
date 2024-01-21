import { useState } from "react"


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
            <div className="w-[98%] mx-auto">
                <div className="flex justify-between items-center p-[1em]">
                    <div className="flex flex-col">
                        <h1 className="text-[1em] font-semibold">Adults</h1>
                        <span className="text-[0.875rem] text-[#b6b6b6]">Ages 13 or above</span>
                    </div>
                    <div className="flex gap-[10px] text-[#b6b6b6] items-center">
                        <div className="border-[1px] rounded-[50%] w-[40px] h-[40px]  cursor-pointer"><span className=" text-[25px] flex justify-center items-center" onClick={() => setAdults(adults - 1)}>-</span></div>
                        <div className="text-[#444444]">{adults}</div>
                        <div className="border-[1px] border-gray-500 rounded-[50%] w-[40px] h-[40px]  cursor-pointer"><span className=" text-[25px] text-gray-500 flex justify-center items-center" onClick={() => setAdults(adults + 1)}>+</span></div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-[1em]">
                    <div className="flex flex-col">
                        <h1 className="text-[1em] font-semibold">Children</h1>
                        <span className="text-[0.875rem] text-[#b6b6b6]">Ages 2–12</span>
                    </div>
                    <div className="flex gap-[10px] text-[#b6b6b6] items-center">
                        <div className="border-[1px] rounded-[50%] w-[40px] h-[40px]  cursor-pointer"><span className=" text-[25px] flex justify-center items-center" onClick={() => setChildren(children - 1)}>-</span></div>
                        <div className="text-[#444444]">{children}</div>
                        <div className="border-[1px] border-gray-500 rounded-[50%] w-[40px] h-[40px]  cursor-pointer"><span className=" text-[25px] text-gray-500 flex justify-center items-center" onClick={() => setChildren(children + 1)}>+</span></div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-[1em]">
                    <div className="flex flex-col">
                        <h1 className="text-[1em] font-semibold">Infants</h1>
                        <span className="text-[0.875rem] text-[#b6b6b6]">Under 2
                        </span>
                    </div>
                    <div className="flex gap-[10px] text-[#b6b6b6] items-center">
                        <div className="border-[1px] rounded-[50%] w-[40px] h-[40px]  cursor-pointer"><span className=" text-[25px] flex justify-center items-center" onClick={() => setInfants(infants - 1)}>-</span></div>
                        <div className="text-[#444444]">{infants}</div>
                        <div className="border-[1px] border-gray-500 rounded-[50%] w-[40px] h-[40px]  cursor-pointer"><span className=" text-[25px] text-gray-500 flex justify-center items-center" onClick={() => setInfants(infants + 1)}>+</span></div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-[1em]">
                    <div className="flex flex-col">
                        <h1 className="text-[1em] font-semibold">Pets</h1>
                        <span className="text-[0.875rem] text-[#b6b6b6]">Ages 13 or above</span>
                    </div>
                    <div className="flex gap-[10px] text-[#b6b6b6] items-center">
                        <div className="border-[1px] rounded-[50%] w-[40px] h-[40px]  cursor-pointer"><span className=" text-[25px] flex justify-center items-center" onClick={() => setPets(pets - 1)}>-</span></div>
                        <div className="text-[#444444]">{pets}</div>
                        <div className="border-[1px] border-gray-500 rounded-[50%] w-[40px] h-[40px]  cursor-pointer"><span className=" text-[25px] text-gray-500 flex justify-center items-center" onClick={() => setPets(pets + 1)}>+</span></div>
                    </div>
                </div>
                <div className='flex w-[100%] items-center jusstify-center gap-[1em]'>
                    <button className='border-[1px] py-[10px] font-semibold rounded-lg hover:shadow-md w-[49%]'>Back</button>
                    <button className='bg-[#ff385c] py-[10px] text-white rounded-lg hover:shadow-md w-[49%]'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default AddGuest