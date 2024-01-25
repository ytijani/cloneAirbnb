import { CategoryListProps } from "../src/store";



const UseFilter = ({array, value} : any) => 
{

    return array.filter((item: CategoryListProps) => item.category === value);
}
export default UseFilter;



