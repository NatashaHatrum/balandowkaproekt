import React from 'react';
import classes from "../Kontakts/Map.module.css";
import {MapContainer, Marker, Popup} from 'react-leaflet'
import {TileLayer} from 'react-leaflet'
import photo from "./../Assets/img/IMG_4944.JPG"

const position = [49.28653, 19.95128];

class MyMap extends React.Component {

    render() {
        return (
            <MapContainer
                center={[49.28653, 19.95128]}
                zoom={16}
                scrollWheelZoom={false}
                className={classes.main}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={position}>
                    <Popup>
                        <img style={{width:'100px', height:'auto'}} src={photo}/>  <p> Bałandówka</p>
                    </Popup>
                </Marker>
            </MapContainer>)
    }

}


export default MyMap;
