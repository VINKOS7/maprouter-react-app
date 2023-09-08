import { useRef } from "react"
import { Route } from "../../models/Route"
import { RouteItemComponent } from "./components/RouteItemComponent"

interface RoutesListComponentProps {
    setShowRouteById(id: string): void
    routes: Route[]
}

export const RoutesListComponent = (props: RoutesListComponentProps) => {
    const showRouteId = useRef("")

    const Click = (id: string) => {
        showRouteId.current = id

        props.setShowRouteById(id)
    }

    return (
        <div>
            {props.routes.map(item => 
                <RouteItemComponent 
                    isClick={showRouteId.current === item.id? true: false}
                    setShowRouteById={() => Click(item.id)} 
                    key={item.name} 
                    route={item}/>)
            }
        </div>
    )
}