'use client'

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const CategoryList = ({ exploreData }: any) => {

   
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mt-[2em] gap-[1.2em]  ">
            {exploreData.length ? exploreData.map((item: any) => {
                const { picture, location, Country, country, distance } = item;
                return (
                    <Link
                         href={{
                            pathname:"/details",
                            query: {
                                picture,
                                location,
                                country : Country ? Country : country,
                                distance,
                                price : "62$"
                            }
                         }}
                        key={location}
                        className="flex flex-col cursor-pointer" >
                        <Image
                            className="rounded-xl h-[16em]  cover"
                            src={picture}
                            alt="picture"
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
                    </Link>
                );
            }) : <h1 className="flex justify-center items-center w-[85vw]">Not Added Yet</h1>}
        </div>
    );
};

export default CategoryList;
