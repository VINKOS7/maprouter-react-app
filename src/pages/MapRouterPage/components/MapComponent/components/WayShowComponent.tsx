import { Route } from "../../../models/Route";
import { RoutingLayer } from "../createRoutineMachineLayer";

interface WayShowComponentProps {
    showRouteId: string
    routes: Route[]
}

export const WayShowComponent = (props: WayShowComponentProps) => {
    const showRoute = props.routes.find(item => item.id === props.showRouteId)

    if(!showRoute) return null

    const WaysLayer = RoutingLayer(showRoute.points)

    return <WaysLayer/>
}
    