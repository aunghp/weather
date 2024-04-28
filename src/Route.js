import { createBrowserRouter } from "react-router-dom";
import { Home } from "./modules/Home/index";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
]);