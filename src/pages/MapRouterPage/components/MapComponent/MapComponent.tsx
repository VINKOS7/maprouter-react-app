import { Icon, LatLng, Routing, point } from "leaflet";
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet"
import "leaflet-routing-machine";

import { getRoutes } from "../../../../connection/routesApi/routesApi";

import styles from "./MapComponent.module.scss"
import './MapComponent.css'
import markerIconPng from "./images/marker-icon.png"

import { RoutingLayer }  from "./createRoutineMachineLayer";
import { Route } from "../../models/Route";
import { WayShowComponent } from "./components/WayShowComponent";
import { useEffect } from "react";

interface MapComponentProps {
    showRouteId: string,
    center: LatLng,
    zoom: number,
    routes: Route[]
}

{/* <Marker position={props.position} >
<Popup>
    <img src="https://cdn-icons-png.flaticon.com/512/76/76785.png"/>
</Popup>
</Marker> */}
//<link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"/>
export const MapComponent = (props: MapComponentProps) => {    
    return (
        <div>          
          <MapContainer
              className={styles.map}
              center={props.center} 
              zoom={props.zoom} 
              scrollWheelZoom={true}
          >
            <TileLayer     
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {<WayShowComponent showRouteId={props.showRouteId} routes={props.routes} />}
          </MapContainer>
        </div>
    )
}