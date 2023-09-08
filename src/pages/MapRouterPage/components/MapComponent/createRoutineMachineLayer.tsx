import L, { LatLng } from "leaflet";
import { createControlComponent } from "@react-leaflet/core";

export const RoutingLayer = (points: LatLng[]) => createControlComponent(() => L.Routing.control({
        waypoints: points,
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }],
            extendToWaypoints: false,
            missingRouteTolerance: 10
        },
        show: false,
        collapsible: false,
        addWaypoints: false,
        routeWhileDragging: false,
        //draggableWaypoints: true,
        fitSelectedRoutes: false,
        showAlternatives: false,
    })
)