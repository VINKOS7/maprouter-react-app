import { LatLng } from "leaflet";

import { MapComponent } from "./components/MapComponent/MapComponent";

import styles from "./MapRouterPage.module.scss"
import { RoutesListComponent } from "./components/RoutesListComponent/RoutesListComponent";
import { getRoutes } from "../../connection/routesApi/routesApi";
import { useState } from "react";

export const MapRouterPage = () => {
    const position = new LatLng(59.702868, 30.530865)
    const routes = getRoutes()

    const [showRouteById, setShowRouteById] = useState("")

    return (
        <div>
            <div className={styles.mapRouter}> 
                <div className={styles.routesList}>
                    <RoutesListComponent setShowRouteById={(id: string) => setShowRouteById(id)} routes={routes}/>
                </div>
                
                <MapComponent showRouteId={showRouteById} center={position} zoom={10} routes={routes}/>
            </div>
        </div>
    )
}