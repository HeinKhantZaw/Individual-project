import React from "react";
import {Handle, Position} from "reactflow";

const OperatorNode = ({data}) => {
    const nodeStyle = {
        width: 50,
        height: 20,
        backgroundColor: "white",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
    };

    return (
        <div style={nodeStyle}>
            <Handle type="target" position={Position.Top} id={"operator_top"}/>
            <Handle type="source" position={Position.Left} id="operator_left"/>
            <p className={"text-xs text-center"}>{data.label}</p>
            <Handle type="source" position={Position.Right} id={"operator_right"}/>
            <Handle type="source" position={Position.Bottom} id={"operator_middle"}/>
        </div>
    );
};

export default OperatorNode;
