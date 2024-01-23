'use client'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import ShowCountries from '../help/ShowCountries';
import ShowDate from '../help/ShowDate';
import AddGuest from '../help/AddGuest';

export enum Steps {
    Where = 1,
    Date = 2,
    AddGuest = 3
}

const SearchBar = () => {

    const [step, setStep] = useState<Steps>(Steps.Where);
    const renderStepComponent = (close : any) => {
        switch (step) {
            case Steps.Where:
                return <ShowCountries close={close} setStep={setStep} />;
            case Steps.Date:
                return <ShowDate close={close} setStep={setStep} />;
            case Steps.AddGuest:
                return <AddGuest close={close} setStep={setStep} />;
            default:
                return null;
        }
    };

    return (
        <div className='border-[1px] py-2 rounded-[50px] showd-ms hover:shadow-md w-auto px-2 transition cursor-pointer'>
            <div className='flex  justify-between items-center gab-2 '>
                <div className='text-sm font-semibold px-9'>
                    <Popup trigger={<button >Where</button>} modal>
                        {//@ts-ignore
                           close => renderStepComponent(close)}
                    </Popup>
                </div>
                <div className='border-x-[1px]  text-center font-semibold px-9'>
                    <Popup trigger={<button >Date</button>} modal>
                        {//@ts-ignore
                            close => renderStepComponent(close)}
                    </Popup>
                </div>
                <div className=' flex items-center gap-2 justify-center'>
                    <Popup trigger={<div className=' ml-[20px] text-center font-semibold  text-gray-600 '>Add guest</div>} modal>
                        {//@ts-ignore
                            close =>  renderStepComponent(close)}
                    </Popup>
                    <div className='text-white p-2 bg-[#ff385c] rounded-full'><BiSearch size={18} /></div>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;