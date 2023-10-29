import React from 'react';
import {EdgeLabelRenderer, BaseEdge, getStraightPath} from 'reactflow';

const DottedEdge = ({id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, markerStart}) => {
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
                    }}
                    className="nodrag nopan"
                >
                    + {data?.label}
                </div>
            </EdgeLabelRenderer>
        </>
    );
};

export default DottedEdge;
