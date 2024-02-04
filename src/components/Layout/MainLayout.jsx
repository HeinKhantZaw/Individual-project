import React from "react";
import Button from "arwes/lib/Button/index.js";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useNavigate} from "react-router-dom";
import {FaDownload, FaFileUpload} from "react-icons/fa";
import {Tooltip} from 'react-tooltip'
import {Text} from "@arwes/react-text";
import {setPhase3Value, setPhaseStatusState, toggleInfo} from "../../redux/slices/phaseStatusSlice.jsx";
import {setPhaseOneState} from "../../redux/slices/phaseOneSlice.jsx";
import {setPhaseTwoState} from "../../redux/slices/phaseTwoSlice.jsx";
import SelectOption from "../Select";

export default function MainLayout() {
    // const bleeps = useBleeps();
    const navigate = useNavigate();
    const {nextPhaseEnabled, currentPhase, infoToggle, phase3Value} = useSelector((state) => state.phaseStatus);
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
                if(data.phaseOne) {
                    dispatch(setPhaseOneState(data.phaseOne));
                }
                if(data.phaseTwo) {
                    dispatch(setPhaseTwoState(data.phaseTwo));
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    function phase3Navigation() {
        if (phase3Value === "Phase C1")
            navigate("phase3/b");
        else if (phase3Value === "Phase C2")
            navigate("phase3/c");
        else if (phase3Value === "Phase C3")
            navigate("phase4");
    }

    const phaseThreeOnChange = (event) => {
        const selectedValue = event.target.value
        dispatch(setPhase3Value(selectedValue));
        if (selectedValue === "Phase C1")
            navigate("phase3/a");
        else if (selectedValue === "Phase C2")
            navigate("phase3/b");
        else if (selectedValue === "Phase C3")
            navigate("phase3/c");
    }

    const goToNextPhase = () => {
        switch (currentPhase) {
            case 1:
                navigate("phase2");
                break;
            case 2:
                navigate("phase3/a");
                break;
            case 3:
                phase3Navigation();
                break;
            case 4:
                navigate("phase5");
                break;
        }
    }
    const goToPhase1 = () => {
        navigate("/app");
    }
    const goToPhase2 = () => {
        navigate("phase2");
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
                <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="/" className="flex items-center">
                            <img src="/assets/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                            <span
                                className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Web-Agon</span>
                        </a>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
                            key={currentPhase}>
                            <li>
                                <Button className={"font-semibold text-lg phase-button phase-1"}
                                        layer={currentPhase === 1 ? "success" : "secondary"} onClick={goToPhase1}>
                                    Phase A
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button phase-2"}
                                        disabled={currentPhase < 2}
                                        layer={currentPhase === 2 ? "success" : "secondary"} onClick={goToPhase2}>
                                    Phase B
                                </Button>
                            </li>
                            <li>
                                {/*<Button animate className={"font-semibold text-lg phase-button phase-3"}*/}
                                {/*        disabled={currentPhase < 3}*/}
                                {/*        layer={"secondary"} onClick={goToPhase3}>*/}
                                {/*    Phase 3*/}
                                {/*</Button>*/}
                                <SelectOption
                                    name="phase3"
                                    options={[
                                        { id: "Phase C1", value: "Phase C1" },
                                        { id: "Phase C2", value: "Phase C2" },
                                        { id: "Phase C3", value: "Phase C3" },
                                    ]}
                                    onChange={phaseThreeOnChange}
                                    optionValueId={"id"}
                                    optionInnerContent={"value"}
                                    style={{
                                        color: currentPhase < 3 ? "#999" : currentPhase === 3 ? "#00ff00" :"#df9527",
                                    }}
                                    currentPhase={currentPhase}
                                    required
                                    selected={phase3Value}
                                    disabled={currentPhase < 3}
                                />
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button phase-4"}
                                        disabled={currentPhase < 4}
                                        onClick={goToPhase4}
                                        layer={currentPhase === 4 ? "success" : "secondary"}>
                                    Phase D
                                </Button>
                            </li>
                            <li>
                                <Button animate className={"font-semibold text-lg phase-button phase-5"}
                                        disabled={currentPhase < 5}
                                        onClick={goToPhase5}
                                        layer={currentPhase === 5 ? "success" : "secondary"}>
                                    Phase E
                                </Button>
                            </li>
                        </ul>
                        <div className="flex items-center lg:order-2">
                            <Button animate className={"font-semibold text-lg custom-button"}
                                    // buttonProps={{onMouseEnter: () => bleeps.hover?.play()}}
                                    disabled={!nextPhaseEnabled}
                                    onClick={goToNextPhase}>
                                { currentPhase !== 5 ? "Next Phase" : "Finalize"}
                            </Button>
                        </div>
                        <div className="flex items-center lg:order-2">
                            <div className={"w-10"}/>
                            <Button animate className={"font-semibold text-lg custom-button upload"}
                                    layer={"control"}
                                    onClick={uploadJson}>
                                <FaFileUpload size={"1.2em"}/>
                            </Button>
                            <div className={"w-4"}/>
                            <Button animate className={"font-semibold text-lg custom-button download"}
                                    layer={"control"}
                                    onClick={saveAsJson}>
                                <FaDownload size={"1.2em"}/>
                            </Button>
                        </div>
                        <div className="flex flex-col items-center lg:order-2">
                            <Text manager="decipher" easing="outSine" fixed style={{color: "#A9F6F8"}}>Info</Text>
                            <label className="switch">
                                <input type="checkbox" checked={infoToggle} onChange={() => dispatch(toggleInfo())}/>
                                <span className={`slider`}>
                                </span>
                            </label>
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
                Specification Summary
            </Tooltip>
            <Tooltip anchorSelect=".phase-5" place="bottom">
                Context-Based Operationalization via Gamification
            </Tooltip>
        </div>
    );
}
