
'use client'

import { BiSearch } from 'react-icons/bi';
import Search from '../assets/Search.svg'

const SearchBar = () => {

    return (
        <div className='border-[1px] py-2 rounded-[50px] showd-ms hover:shadow-md w-auto px-2 transition cursor-pointer'>
            <div className='flex  justify-between items-center gab-2 '>
                <div className='text-sm font-semibold px-9'>
                    Where
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