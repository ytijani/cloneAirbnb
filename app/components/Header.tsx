'use client'

import Link from "next/link";
import Airbnb from '../assets/airbnb.svg'
import Image from "next/image";
import SearchBar from "./SearchBar";
import { TbWorld } from "react-icons/tb";
import { BiListUl, BiSolidUserCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
    return (
        <header className="sticky bg-white top-0 z-50 border-b-[1px]">
            <div className="container  flex justify-between items-center ">
                <Link href="/" className="relative flex items-center  my-auto">
                    <Image
                        src={Airbnb}
                        alt="Logo"
                        className="objcet-contain object-left"
                    />
                </Link>
                <SearchBar />

                <div className=" flex  items-center gap-[1em]">
                    <div className="hover:bg-gray-200 py-[10px] px-[20px] rounded-full font-medium">
                        Airbnb your home
                    </div>
                    <div className="hover:bg-gray-200 py-[10px] rounded-[50%] px-[10px]">
                    <TbWorld className="text-black-100" />

                    </div>
                    <div className="flex items-center border-[1px] border-[#717171] rounded-full py-[10px] px-[20px] gap-[6px] hover:shadow-md">
                        <GiHamburgerMenu size={20} className="text-[#717171]"/>
                        <BiSolidUserCircle size={25} className="text-[#717171]" />
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;