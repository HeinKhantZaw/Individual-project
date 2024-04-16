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
                          strokeWidth: selected ? 5 : 3,
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
                        fontSize: 30,
                        fontWeight: 700,
                        marginTop: data?.hasLineBreak || 0,
                        marginLeft: data?.hasMarginLeft || 0,
                    }}
                    className="nodrag nopan bg-slate-400 dark:bg-slate-900"
                >
                    <pre className={"text-center text-3xl bold text-white"}>{ data?.label }</pre>
                </div>
            </EdgeLabelRenderer>
        </>
    );
};

export default NeedDottedEdge;
