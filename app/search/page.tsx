'use client';

import { useStore } from '@/app/src/store';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { FaStar } from 'react-icons/fa';
import dynamic from 'next/dynamic';


const Map = dynamic(() => import ('../components/Map'), {
    ssr : false
});

const SearchResult =  () => {

    const [filterData, setFilterData] = useState<any>();
    const userData = useStore.getState().userData ||  [];

    const myCountry = useStore.getState().country || [];
    const location = useStore.getState().location || [50,50];

    useEffect(() => {
        setFilterData(userData.filter((item: any) => (
            item.Country ? item.Country === myCountry : item.country === myCountry
        )));
    }, [myCountry, userData])
    return (
        <div className='grid grid-cols-2 container gap-[1em] mt-[1em]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[1.2em] overflow-auto h-[80vh] hide'>
                {filterData && filterData.map((item: any) => {
                    const { picture, location, Country, country,distance} = item;
                    return (
                        <div key={location} className="flex flex-col cursor-pointer">
                        <Image
                            className="rounded-xl h-[16em]  cover"
                            src={picture}
                            alt={location}
                            width={800} 
                            height={480} 
                        />
                        <div className="mt-[1em] ml-[3px] flex justify-between">
                            <p className="text-[#222222] text-[13px] font-bold">
                                {location}, {Country ? Country : country}
                            </p>
                            <div className="flex justify-center items-center gap-[4px]">
                                <FaStar size={16} /> <span>2.75</span>
                            </div>
                        </div>
                        <p className="text-[#717171] text-[11px] ml-[3px]">{distance}</p>
                        <div className="ml-[3px] flex gap-[6px]">
                            <span className="font-semibold">62$</span>
                            <span className="font-light">night</span>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className=''>
               <Map center={location} height="80vh"/>
            </div>
        </div>
    )
}
export default SearchResult;