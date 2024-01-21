
import { useState } from 'react';
import { DateRange, DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

const ShowDate = (props: any) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange: any = {
        startDate,
        endDate,
        key: 'selection'
    };

    const handleSelect = (ranges: RangeKeyDict) => {
        setStartDate(ranges.selection.startDate as Date);
        setEndDate(ranges.selection.endDate as Date);
    };

    return (
        <>
            <button onClick={props.close} className=' bg-[#ff385c] rounded-full w-[20px] h-[20px] text-[15px] text-white flex justify-center items-center '>
                <span>&times;</span>
            </button>
            <h1 className='text-center border-b-[1px] font-bold'>Select Your Date</h1>
            <div className='flex flex-col justify-center  mt-[2em]'>
                <DateRange
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                    className='w-full'
                    rangeColors={["#FD5B61"]}
                    minDate={new Date()}
                />
                <div className='flex w-[100%] items-center jusstify-center gap-[1em]'>
                    <button className='border-[1px] py-[10px] font-semibold rounded-lg hover:shadow-md w-[49%]'>Back</button>
                    <button className='bg-[#ff385c] py-[10px] text-white rounded-lg hover:shadow-md w-[49%]'>NEXT</button>

                </div>
            </div>
        </>

    )
}
export default ShowDate;