import React, {useCallback} from "react";
import {Handle} from "reactflow";
import {useDispatch, useSelector} from "react-redux";
import {updateResultName} from "../../redux/slices/phaseOneSlice.jsx";

const HexagonNode = () => {
    const dispatch = useDispatch();
    const {resultName} = useSelector((state) => state.phaseOne);
    const nodeStyle = {
        width: 250,
        height: 200,
        backgroundColor: "#FEBE01",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
    };

    const updateName = useCallback((evt) => {
        dispatch(updateResultName(evt.target.value));
    }, []);

    return (
        <>
            <Handle type={"target"} position={"top"} className={"custom-handle"}/>
            <div style={nodeStyle}>
                <input id="text" value={resultName} name="text" onChange={updateName}
                       className="w-5/6 nodrag text-center text-2xl"/>
            </div>
        </>
    );
};

export default HexagonNode;
