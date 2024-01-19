
'use client'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BiSearch } from 'react-icons/bi';
import SelectCountry from './SelectCountry';
import Map from './Map';
import { useState } from 'react';



const ShowCountries = (props: any) => {

    const [location, setLocation] = useState();
    return (
        <div className='h-[60vh]'>
            <button onClick={props.close} className=' bg-[#ff385c] rounded-full w-[20px] h-[20px] text-[15px] text-white flex justify-center items-center '>
                <span>&times;</span>
            </button>
            <h1 className='text-center border-b-[1px]'>Airbnb Your Home</h1>
            <div className='flex flex-col gap-[2px] mt-[1.5em] ml-[1.6em]'>
                <h1 className='font-semibold'>Where is your place located?</h1>
                <span className='text-gray-500 font-normal text-[10px]'>Help guests to find you! </span>
                <SelectCountry onChange={() => { }} />
                <Map />
            </div>
        </div>
    )
}


const SearchBar = () => {

    return (
        <div className='border-[1px] py-2 rounded-[50px] showd-ms hover:shadow-md w-auto px-2 transition cursor-pointer'>
            <div className='flex  justify-between items-center gab-2 '>
                <div className='text-sm font-semibold px-9'>
                    <Popup trigger={<button>Where</button>} modal>
                        {//@ts-ignore
                            close => (<ShowCountries close={close} />)}
                    </Popup>
                </div>
                <div className='border-x-[1px]  text-center font-semibold px-9'>
                    Date
                </div>
                <div className=' flex items-center gap-2 justify-center'>
                    <div className=' ml-[20px] text-center font-semibold  text-gray-600 '>Add guest</div>
                    <div className='text-white p-2 bg-[#ff385c] rounded-full'><BiSearch size={18} /></div>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;