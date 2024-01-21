import { FaStar } from "react-icons/fa"; // I used FaStar for illustration, replace it with your LiaStarSolid
import Image from "next/image";

const CategoryList = ({ exploreData }: any) => {
    return (
        <div className="grid grid-cols-4 container mt-[2em] gap-[1.2em] overflow-auto h-[80vh]">
            {exploreData.map((item: any) => {
                const { picture, location, Country, country, distance } = item;
                return (
                    <div key={location} className="flex flex-col">
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
                );
            })}
        </div>
    );
};

export default CategoryList;
