'use client'

import SelectCountry, { CountrySelectValue } from '../components/SelectCountry';
import Map from '../components/Map';
import { useState } from 'react';
import { useStore } from '../src/store';
import { Steps } from '../components/SearchBar';

const ShowCountries = (props: any) => {

    const [location, setLocation] = useState<CountrySelectValue>();
    const handleCountrySelect = (selectedCountry: CountrySelectValue) => {
        setLocation(selectedCountry);
        useStore.setState({country : selectedCountry.label, location : selectedCountry.latlng})
    };
    return (
        <div className='h-[65vh]'>
            <button onClick={props.close} className=' bg-[#ff385c] rounded-full w-[20px] h-[20px] text-[15px] text-white flex justify-center items-center '>
                <span>&times;</span>
            </button>
            <h1 className='text-center border-b-[1px] font-bold'>Airbnb Your Home</h1>
            <div className='flex flex-col gap-[20px] mt-[1.5em] justify-center w-[90%] mx-auto'>
                <div>
                    <h1 className='font-semibold'>Where is your place located?</h1>
                    <span className='text-gray-500 font-normal text-[10px]'>Help guests to find you! </span>
                </div>
                <SelectCountry onChange={handleCountrySelect} />
                <Map center={location ? location.latlng : undefined} height={`35vh`}/>
                <button className='bg-[#ff385c] py-[10px] text-white rounded-xl hover:shadow-md' onClick={() => props.setStep(Steps.Date)}>NEXT</button>
            </div>
        </div>
    )
}

export default ShowCountries;