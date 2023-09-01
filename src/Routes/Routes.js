import {createHashRouter, createRoutesFromElements, Route} from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";


export default function Routes () {
    const routes = createHashRouter(
        createRoutesFromElements(
            <Route path={'/'} element={<Root />}>
                 <Route index element={<Home />} />
            </Route>
        )
    )

    return {
        routes
    }
}
