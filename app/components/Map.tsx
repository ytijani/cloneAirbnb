
'use client';

import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinalUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src

});

export interface MapProps {
    center?: number[];
    height? : string;
}
const Map: React.FC<MapProps> = ({ center , height}) => {

    return (
        <MapContainer
            center={center as L.LatLngExpression  || [51, -0.09]}
            zoom={center ? 10 : 2}
            scrollWheelZoom={true}
            className={`h-[${height}vh] rounded-lg`}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           {center && <Marker position={center as L.LatLngExpression}></Marker>}
        </MapContainer>
    )
}

export default Map;