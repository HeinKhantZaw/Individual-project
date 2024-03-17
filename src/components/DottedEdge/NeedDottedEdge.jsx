import React from 'react';
import {EdgeLabelRenderer, BaseEdge, getStraightPath} from 'reactflow';
import {isUndefined} from "lodash";

const NeedDottedEdge = ({id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, markerStart, markerEnd, selected=true}) => {
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
                          stroke: selected ? '#0F0' : '#fff',
                          strokeWidth: selected ? 4 : 2,
                          strokeDasharray: '5 5',
                          pointerEvents: 'none',
                      }}
                      markerStart={markerStart}
                      markerEnd={markerEnd}
            />
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        padding: 4,
                        borderRadius: 5,
                        color: selected ? '#0F0' : '#fff',
                        background: "#242424",
                        fontSize: 30,
                        fontWeight: 700,
                        marginTop: data?.hasLineBreak || 0,
                        marginLeft: data?.hasMarginLeft || 0,
                    }}
                    className="nodrag nopan"
                >
                    <pre className={"text-center text-3xl bold"}>{ data?.label }</pre>
                </div>
            </EdgeLabelRenderer>
        </>
    );
};

export default NeedDottedEdge;
