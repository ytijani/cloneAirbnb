import {create} from 'zustand'
import { CategoryListProps } from '../utils/api';


export const useStore = create<{
    country : string,
    startDate : Date,
    endDate : Date,
    userData : CategoryListProps[] | null,

}>((set) => ({
    country : "",
    startDate : new Date(),
    endDate : new Date(),
    userData : null
}));