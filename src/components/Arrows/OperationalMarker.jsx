import React from "react";

export const OperationalMarker = () => (
    <svg style={{position: 'absolute', top: 0, left: 0}}>
        <defs>
            <marker
                id="operate"
                viewBox="0 0 60 60"
                markerHeight={20}
                markerWidth={20}
                refX={20}
                refY={40}
            >
                <path
                    d="M35 23H25C23.8954 23 23 23.8954 23 25V35C23 36.1046 23.8954 37 25 37H35C36.1046 37 37 36.1046 37 35V25C37 23.8954 36.1046 23 35 23Z"
                    stroke="#FFF"
                    strokeWidth="20"
                    fill="white"
                />
            </marker>
        </defs>
    </svg>
)
