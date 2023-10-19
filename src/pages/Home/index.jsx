import React, {useEffect, useState} from "react";
import HomeBackground from "../../components/Background/HomeBackground.jsx";
import {Animator} from "@arwes/react-animator";
import {Text} from "@arwes/react-text";
import {BleepsProvider} from '@arwes/react-bleeps';
import {BleepsOnAnimator} from '@arwes/react-core';

import Button from "arwes/lib/Button/index.js";
import {Animated} from '@arwes/react-animated';

export default function Home() {
    const [settings] = useState({
        master: {
            volume: 0.75
        },
        bleeps: {
            intro: {
                sources: [{src: '/assets/intro.webm', type: 'audio/mpeg'}],
                loop: true
            }
        }
    });
    const hoverFunc = () => {
        document.getElementById("get-started").style.backgroundColor = "#00ff00";
        new Audio("/assets/hover.webm").play();
    }
    const hoverOutFunc = () => {
        document.getElementById("get-started").style.backgroundColor = "";
    }
    useEffect(() => {
        document.getElementById("get-started").classList.add("animate-pulse");
    }, []);

    return (
        <>
            <BleepsProvider {...settings}>
                <HomeBackground/>
                <div className={"inset-center"}>
                    <Animator active={true} combine manager='sequence'>
                        <Animator duration={1.5}>
                            <BleepsOnAnimator
                                transitions={{
                                    entering: 'intro',
                                }}/>
                            <h1 className={"font-semibold text-5xl"}>
                                <Text manager="decipher" easing="outSine" fixed>
                                    AGON - I
                                </Text>
                            </h1>
                        </Animator>
                        <Animator duration={2}>
                            <BleepsOnAnimator
                                transitions={{
                                    entering: 'intro',
                                }}/>
                            <div className={"font-medium text-lg"}>
                                <Text manager="decipher" easing="outSine" fixed>
                                    A Tool for the Gamification of Software Systems
                                </Text>
                            </div>
                        </Animator>
                        <div className={"mt-6"}>
                            <Animator>
                                <Animated animated={{
                                    transitions: {
                                        entering: {
                                            y: [150, 0],
                                            options: {duration: 0.4, easing: 'ease-in-out'}
                                        },
                                    }
                                }}>
                                    <BleepsOnAnimator
                                        transitions={{
                                            entering: 'intro',
                                        }}/>
                                    <Button buttonProps={{
                                        onMouseEnter: () => hoverFunc(),
                                        onClick: () => window.location.href = "/app",
                                        onMouseLeave: () => hoverOutFunc()
                                    }}
                                            animate layer={"success"}
                                            id={"get-started"}
                                    >
                                        <Text>Get Started</Text>
                                    </Button>
                                </Animated>
                            </Animator>
                        </div>
                    </Animator>
                </div>
            </BleepsProvider>
        </>
    )
        ;
}
