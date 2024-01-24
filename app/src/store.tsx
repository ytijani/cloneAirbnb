import {create} from 'zustand'

export interface CategoryListProps{
    picture : string,
    location : string,
    Country : string,
    category : string,
    distance : string,
}

export const useStore = create<{
    country : string,
    location : number[] | [],
    startDate : Date,
    endDate : Date,
    userData : CategoryListProps[] | null,

}>((set) => ({
    country : "",
    location : [],
    startDate : new Date(),
    endDate : new Date(),
    userData : null
}));