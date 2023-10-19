import Home from "../pages/Home/index.jsx";
import PhaseOne from "../pages/PhaseOne/index.jsx";

const routes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/app",
        element: <PhaseOne/>
    }
]
export default routes;
