import { useRef } from "react"
import { Route } from "../../../models/Route"

import styles from "./RouteItemComponent.module.scss"

interface RouteItemComponentProps {
    isClick: boolean
    setShowRouteById(): void
    route: Route
}

export const RouteItemComponent = (props: RouteItemComponentProps) => {

    return (
        <div>
            {!props.isClick && 
                <div onClick={props.setShowRouteById} className={styles.itemDefault}>
                    {props.route.name}
                </div>
            }
            {props.isClick && 
                <div onClick={props.setShowRouteById} className={styles.itemClicked}>
                    {props.route.name}
                </div>
            }
        </div>
    )
}