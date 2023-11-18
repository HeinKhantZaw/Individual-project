import Home from "../pages/Start/index.jsx";
import PhaseOne from "../pages/PhaseOne/index.jsx";
import Intro from "../pages/Intro/index.jsx";
import PhaseTwo from "../pages/PhaseTwo/index.jsx";
import PhaseThree from "../pages/PhaseThree/index.jsx";
import MainLayout from "../components/Layout/MainLayout.jsx";

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
        path: "/app",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <PhaseOne />
            },
            {
                path: "phase2",
                element: <PhaseTwo/>
            },
            {
                path: "phase3",
                element: <PhaseThree/>
            },
        ]
    },
]
export default routes;
