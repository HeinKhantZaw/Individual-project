import Home from "../pages/Start";
import PhaseOne from "../pages/PhaseOne";
import Intro from "../pages/Intro";
import PhaseTwo from "../pages/PhaseTwo";
import PhaseThreeA from "../pages/PhaseThree/phaseThreeA.jsx";
import MainLayout from "../components/Layout/MainLayout.jsx";
import PhaseThreeB from "../pages/PhaseThree/phaseThreeB.jsx";
import {useParams} from "react-router-dom";
import PhaseThreeC from "../pages/PhaseThree/phaseThreeC.jsx";
import PhaseFour from "../pages/PhaseFour";
import PhaseFive from "../pages/PhaseFive";

const RenderPhaseThree = () => {
    const {p} = useParams();

    switch (p) {
        case "a":
            return <PhaseThreeA/>;
        case "b":
            return <PhaseThreeB/>;
        case "c":
            return <PhaseThreeC/>;
    }
};
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
                element: <PhaseOne/>
            },
            {
                path: "phase2",
                element: <PhaseTwo/>
            },
            {
                path: "phase3/:p",
                element: <RenderPhaseThree/>
            },
            {
                path: "phase4",
                element: <PhaseFour/>
            },
            {
                path: "phase5",
                element: <PhaseFive/>
            }
        ]
    },
]
export default routes;
