import React from 'react';
import {EdgeLabelRenderer, BaseEdge, getStraightPath} from 'reactflow';

const NeedDottedEdge = ({id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, markerStart, markerEnd}) => {
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
                          stroke: '#fff',
                          strokeWidth: 2,
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
