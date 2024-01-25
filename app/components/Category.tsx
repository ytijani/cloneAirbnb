
'use client'

import Image from "next/image";
import useFilter from "../help/useFilter";
import { useState } from "react";
import CategoryList from "./CategoryList";
import { useStore } from "../src/store";

interface Category {
    name: string,
    image: string
}

const categoryData = [
    {
        name: "Trending",
        image: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
    },
    {
        name: "Vineyards",
        image: "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg"
    },
    {
        name: "Earth homes",
        image: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
    },
    {
        name: "Countryside",
        image: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
    },
    {
        name: "Mansions",
        image: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
    },
    {
        name: "Desert",
        image: "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg"
    },
    {
        name: "Riads",
        image: "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg"
    },
    {
        name: "Off-the-grid",
        image: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg"
    },
    {
        name: "Islands",
        image: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
    },
    {
        name: "Tropical",
        image: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
    },
    {
        name: "Farms",
        image: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
    },

    {
        name: "National parks",
        image: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
    },
    {
        name: "Amazing views",
        image: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
    },
]


const Category = ({ exploreData }: any) => {
    const [filteredData, setFilteredData] = useState<any>(exploreData);

    useStore.setState({userData : exploreData});
    const handleFilter = (value: string) => {
        if (exploreData) {
            console.log("value:",value);
            if (value === "Trending")
                setFilteredData(exploreData);
            else {
                const filteredResults = useFilter({ array: exploreData, value });
                setFilteredData(filteredResults);

            }
        }
    };

    return (
        <>
            <div className="flex justify-between items-center mt-[1em] container">
                {categoryData.map((item: Category) => {
                    const { name, image } = item;
                    return (
                        <div key={name} className="flex flex-col items-center text-[#a2a2a2] hover:text-black cursor-pointer" onClick={() => handleFilter(name)}>
                            <Image className=" w-[24px] h-[24px]" src={image} alt="image" width={20} height={20} />
                            <p className="text-[12px]" >{name}</p>
                        </div>
                    )
                })}
            </div>
            <CategoryList exploreData={filteredData} />
        </>
    )
}

export default Category;