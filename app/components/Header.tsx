'use client'

import Link from "next/link";
import Airbnb from '../assets/airbnb.svg'
import Image from "next/image";
import SearchBar from "./SearchBar";
import { BiListUl, BiSolidUserCircle } from "react-icons/bi";


const Header = () => {
    return (
        <header className="sticky bg-white top-0 z-50 shadow-md">
            <div className="container  flex justify-between items-center ">
                <Link href="/" className="relative flex items-center  my-auto">
                    <Image
                        src={Airbnb}
                        alt="Logo"
                        className="objcet-contain object-left"
                    />
                </Link>
                <SearchBar/>
                <div className=" flex border-[1px] rounded-full py-[10px] px-[20px] gap-[6px]">
                    <BiListUl size={25}/>
                    <BiSolidUserCircle size={25}/>
                </div>
            </div>
        </header>
    )
}


export default Header;