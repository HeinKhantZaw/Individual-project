import React from 'react';
import {EdgeLabelRenderer, BaseEdge, getStraightPath} from 'reactflow';

const StraightEdge = ({id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, markerStart}) => {
    const [edgePath, labelX, labelY] = getStraightPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    return (
        <>
            <BaseEdge id={id} path={edgePath}
                      style={{
                          strokeWidth: 3,
                          pointerEvents: 'none',
                      }}
                      markerStart={markerStart}
            />
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        padding: 4,
                        borderRadius: 5,
                        background: "#242424",
                        fontSize: 30,
                        fontWeight: 700,
                        marginTop: data?.hasLineBreak || 0,
                        marginLeft: data?.hasMarginLeft || 0,
                    }}
                    className="nodrag nopan"
                >
                    <pre className={"text-center text-lg"}>{data?.label}</pre>
                </div>
            </EdgeLabelRenderer>
        </>
    );
};

export default StraightEdge;
