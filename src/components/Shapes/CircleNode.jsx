import React from "react";
import {Handle, Position} from "reactflow";

const CircleNode = ({data}) => {
    const nodeStyle = {
        width: data.size || 100,
        height: data.size || 100,
        borderRadius: "50%",
        padding: 2,
        backgroundColor: data.background || "white",
        color: data.background === "black" ? "white" : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const noTopHandle = data.top === "no";
    return (
        <div style={nodeStyle}>
            {!noTopHandle && <Handle type="target" position={Position.Top} id={"circlle_top"}/>}
            <p className={"text-xs text-center"}>{data.label}</p>
            <Handle type="source" position={Position.Bottom} id={"circle_bottom"}/>
        </div>
    );
};

export default CircleNode;