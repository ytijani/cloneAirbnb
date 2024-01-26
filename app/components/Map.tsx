
'use client'
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
    height?: string;
}
const Map: React.FC<MapProps> = ({ center, height }) => {
    
    const mapStyle = {
        height: height,
        borderRadius: '8px', 
    };
    const defaultCenter: L.LatLngExpression = [51, -0.09];
    console.log("height : ", height);
    return (
        <MapContainer
            center={center && center.length > 0 ? (center as L.LatLngExpression) : defaultCenter}
            zoom={center ? 6 : 3}
            scrollWheelZoom={false}
            style={mapStyle}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {center && <Marker position={center && center.length > 0 ? (center as L.LatLngExpression) : defaultCenter}></Marker>}
        </MapContainer>
    )
}

export default Map;