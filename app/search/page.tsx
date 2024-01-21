'use client';

import {useStore} from '@/app/src/store';

const SearchResult = () => {

    {console.log(useStore.getState().userData)};
    return(
        <h1>SearchResult</h1>
    )
}
export default SearchResult;