import Link from "next/link";
import Airbnb from '../assets/airbnb.svg'
import Image from "next/image";


const Header = () => {
    return (
        <header className="sticky bg-white top-0 z-50 shadow-md py-2">
            <div className="w-[95%] mx-auto">
                <Link href="/" className="relative flex items-center h-[100px] w-[150px] my-auto">
                    <Image
                        src={Airbnb}
                        alt="Logo"
                        fill
                        className="objcet-contain object-left"
                    />
                </Link>

            </div>
        </header>
    )
}


export default Header;