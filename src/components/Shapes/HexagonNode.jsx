import React from "react";

const HexagonNode = () => {
    const nodeStyle = {
        width: 100,
        height: 100,
        backgroundColor: "#FEBE01",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    };

    return (
        <div style={nodeStyle}>
            <p>Hexagon</p>
        </div>
    );
};

export default HexagonNode;
