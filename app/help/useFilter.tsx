import { CategoryListProps } from "../src/store";



const useFilter = ({array, value} : any) => 
{

    return array.filter((item: CategoryListProps) => item.category === value);
}
export default useFilter;



