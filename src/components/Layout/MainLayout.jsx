import React from "react";
import Button from "arwes/lib/Button/index.js";
import {useBleeps} from "@arwes/react-bleeps";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useNavigate} from "react-router-dom";
import {FaDownload, FaFileUpload} from "react-icons/fa";
import {Tooltip} from 'react-tooltip'
import {setPhaseStatusState} from "../../redux/slices/phaseStatusSlice.jsx";
import {setPhaseOneState} from "../../redux/slices/phaseOneSlice.jsx";
import {setPhaseTwoState} from "../../redux/slices/phaseTwoSlice.jsx";

export default function MainLayout() {
    const bleeps = useBleeps();
    const navigate = useNavigate();
    const {nextPhaseEnabled, currentPhase} = useSelector((state) => state.phaseStatus);
    const dispatch = useDispatch();
    const store = useSelector((state) => state);

    const saveAsJson = () => {
        const json = JSON.stringify(store, null, 2);
        const blob = new Blob([json], {type: "application/json"});
        const href = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.download = "web-agon.json";
        document.body.appendChild(link);
        link.click();
    }

    const uploadJson = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const json = event.target.result;
                const data = JSON.parse(json);
                dispatch(setPhaseStatusState(data.phaseStatus));
                dispatch(setPhaseOneState(data.phaseOne));
                dispatch(setPhaseTwoState(data.phaseTwo));
            };
            reader.readAsText(file);
        };
        input.click();
    }

    const goToNextPhase = () => {
        switch (currentPhase) {
            case 1:
                navigate("phase2");
                break;
            case 2:
                navigate("phase3");
                break;
            case 3:
                navigate("phase4");
                break;
            case 4:
                navigate("phase5");
                break;
            default:
                navigate("/app");
                break;
        }
    }
    const goToPhase1 = () => {
        navigate("/app");
    }
    const goToPhase2 = () => {
        navigate("phase2");
    }
    const goToPhase3 = () => {
        navigate("phase3");
    }
    const goToPhase4 = () => {
        navigate("phase4");
    }
    const goToPhase5 = () => {
        navigate("phase5");
    }
    return (
        <div className="holy-grail">
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="/" className="flex items-center">
                            <img src="/assets/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                            <span
                                className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Web-Agon</span>
                        </a>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
                            key={currentPhase}>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button phase-1"}
                                        layer={"secondary"} onClick={goToPhase1}>
                                    Phase 1
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button phase-2"}
                                        disabled={currentPhase < 2}
                                        layer={"secondary"} onClick={goToPhase2}>
                                    Phase 2
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button phase-3"}
                                        disabled={2 < currentPhase < 3}
                                        layer={"secondary"} onClick={goToPhase3}>
                                    Phase 3
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button phase-4"}
                                        disabled={currentPhase < 4}
                                        layer={"secondary"}>
                                    Phase 4
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button phase-5"}
                                        disabled={currentPhase < 5}
                                        layer={"secondary"}>
                                    Phase 5
                                </Button>
                            </li>
                        </ul>
                        <div className="flex items-center lg:order-2">
                            <Button animate className={"font-semibold text-lg custom-button"}
                                    buttonProps={{onMouseEnter: () => bleeps.hover?.play()}}
                                    disabled={!nextPhaseEnabled}
                                    onClick={goToNextPhase}
                            >
                                Next Phase
                            </Button>
                            <div className={"w-10"}/>
                            <Button animate className={"font-semibold text-lg custom-button upload"} onClick={uploadJson}>
                                <FaFileUpload size={"1.2em"}/>
                            </Button>
                            <div className={"w-4"}/>
                            <Button animate className={"font-semibold text-lg custom-button download"} onClick={saveAsJson}>
                                <FaDownload size={"1.2em"}/>
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="holy-grail__main">
                <Outlet/>
            </main>
            <Tooltip anchorSelect=".upload" place="bottom">
                Click to upload your json file!
            </Tooltip>
            <Tooltip anchorSelect=".download" place="bottom">
                Click to download a json file!
            </Tooltip>
            <Tooltip anchorSelect=".phase-1" place="bottom">
                Context Characterization Phase
            </Tooltip>
            <Tooltip anchorSelect=".phase-2" place="bottom">
                Context-Based Analysis of Acceptance Requirements
            </Tooltip>
            <Tooltip anchorSelect=".phase-3" place="bottom">
                Acceptance Requirements Refinement
            </Tooltip>
            <Tooltip anchorSelect=".phase-4" place="bottom">
                Context-Based Operationalization via Gamification
            </Tooltip>
            <Tooltip anchorSelect=".phase-5" place="bottom">
                Domain-Dependent Instantiation of Incentive Mechanisms
            </Tooltip>
        </div>
    );
}
