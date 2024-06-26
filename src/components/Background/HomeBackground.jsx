import {Dots, GridLines, MovingLines} from "@arwes/react-bgs";
import {Animator} from "@arwes/react-animator";
import React from "react";

export default function HomeBackground() {
    return (
        <Animator duration={{interval: 10}}>
            <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: '#000906',
                backgroundImage: 'radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)'
            }}>
                <GridLines
                    lineColor='hsla(180, 100%, 75%, 0.05)'
                    distance={30}
                />
                <Dots
                    color='hsla(180, 100%, 75%, 0.05)'
                    distance={30}
                />
                <MovingLines
                    lineColor='hsla(180, 100%, 75%, 0.07)'
                    distance={30}
                    sets={20}
                />
            </div>
        </Animator>
    );
}
