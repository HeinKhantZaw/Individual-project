import Home from "../pages/Start/index.jsx";
import PhaseOne from "../pages/PhaseOne/index.jsx";
import Intro from "../pages/Intro/index.jsx";

const routes = [
    {
        path: "/",
        element: <Intro/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },
    {
        path: "/one",
        element: <PhaseOne/>
    }
]
export default routes;
