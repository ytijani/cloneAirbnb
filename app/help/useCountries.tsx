;'use client';

import countries from "world-countries";


const formattedCountrie = countries.map((country : any) => ({
    value : country.cca2,
    label : country.name.common,
    flag : country.flag,
    latlng : country.latlng,
    region : country.region
}))

const useCountries = () =>{
    const getAll = () => formattedCountrie;

    const getByValue = (value : string) => {
        return formattedCountrie.find((item : any) => item.value === value)
    }
    return {
        getAll,
        getByValue
    }
};

export default useCountries;