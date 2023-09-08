import { LatLng } from "leaflet";
import { v4 as uuidv4 } from 'uuid'

import { Route } from "../../pages/MapRouterPage/models/Route"


//Имитация апи
export const getRoutes = () => {
    const data = localStorage.getItem("routes")

    if(!data) {
        const routes = generateRoutes()

        localStorage.setItem("routes", JSON.stringify(routes));

        return routes
    }

    return JSON.parse(data) as Route[]
}

const generateRoutes = () => {
    return [
        {
            id: uuidv4(),
            name: "route 1", 
            points: [
                new LatLng(59.84660399, 30.29496392), 
                new LatLng(59.82934196, 30.42423701),
                new LatLng(59.83567701, 30.38064206)
            ]
        },
        {
            id: uuidv4(),
            name: "route 2", 
            points: [
                new LatLng(59.82934196, 30.42423701), 
                new LatLng(59.82761295, 30.41705607),
                new LatLng(59.84660399, 30.29496392)
            ]
        },
        {
            id: uuidv4(),
            name: "route 3", 
            points: [
                new LatLng(59.82934196, 30.38064206), 
                new LatLng(59.82761295, 30.29496392),
                new LatLng(59.84660399, 30.41705607)
            ]
        }
    ] as Route[]
}