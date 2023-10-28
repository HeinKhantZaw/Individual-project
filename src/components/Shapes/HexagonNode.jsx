import React, {useCallback} from "react";
import {Handle} from "reactflow";

const HexagonNode = () => {
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

    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <>
            <Handle type={"target"} position={"top"} className={"custom-handle"}/>
            <div style={nodeStyle}>
                <input id="text" name="text" onChange={onChange} className="w-5/6 nodrag text-center text-2xl"/>
            </div>
        </>
    );
};

export default HexagonNode;
