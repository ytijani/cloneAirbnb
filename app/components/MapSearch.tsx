
'use client';

import Map, { MapProps } from "./Map";



const MapSearch = ({center, height} : MapProps) => {
    return (
        <Map
          center={center ? center : undefined}
          height={height}
        />
    )
}
export default MapSearch;