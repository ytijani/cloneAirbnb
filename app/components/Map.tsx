
'use client';

import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useEffect } from 'react';

//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinalUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src

});

interface MapProps {
    center?: number[];
}
const Map: React.FC<MapProps> = ({ center }) => {

   

    return (
        <MapContainer
            center={center as L.LatLngExpression || [51, -0.09]}
            zoom={center ? 13 : 2}
            scrollWheelZoom={true}
            className='h-[35vh] rounded-lg'
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           {center && <Marker position={center as L.LatLngExpression}></Marker>}
        </MapContainer>
    )
}

export default Map;