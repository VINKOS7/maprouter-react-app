import { LatLng } from "leaflet"

export type Route = {
    id: string
    name: string
    points: LatLng[]
}

type Point = {
    xCoord: number
    yCoord: number
}