
'use client';

import useCountries from "../help/useCountries";
import Select from 'react-select'

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    value: string,
    region: string
}
interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
}

const SelectCountry: React.FC<CountrySelectProps> = ({ value, onChange }) => {

    const { getAll } = useCountries();
    return (
        <div>
            <Select
                placeholder="Anywhere"
                isClearable
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as CountrySelectValue)}
                formatOptionLabel={(option: any) => (
                    <div className="flex items-center gap-[10px] ">
                        <div>{option.flag}</div>
                        <div>
                            {option.label},
                            <span className="text-neutral-600  ml-[5px]">{option.region}</span>
                        </div>
                    </div>
                  )}
                classNames={{
                    control: () => 'p-1 border-2',
                    input: () => 'text-lg',
                    option: () => 'text-lg'
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: '#ffe4e6'
                    }
                }
                )}
            />
        </div>
    )
}

export default SelectCountry;
