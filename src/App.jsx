import React from 'react';
import {
    ThemeProvider,
    createTheme,
} from 'arwes';
import {useRoutes} from "react-router-dom";
import routes from "./routes";
import {AnimatorGeneralProvider} from "@arwes/react-animator";
// import {BleepsProvider} from "@arwes/react-bleeps";

const animatorsSettings= {
    duration: {
        enter: 0.2,
        exit: 0.2,
        stagger: 0.04
    }
};

// const introSound = new URL('/assets/intro.webm', import.meta.url);
// const enterSound = new URL('/assets/intro2.webm', import.meta.url);
// const clickSound = new URL('/assets/click.mp3', import.meta.url);
// const hoverSound = new URL('/assets/hover.webm', import.meta.url);
// const expandSound = new URL('/assets/expand.mp3', import.meta.url);
// const fadeSound = new URL('/assets/fade.mp3', import.meta.url);
//
// const bleepsSettings = {
//     // Shared global audio settings.
//     master: {
//         volume: 0.9
//     },
//     bleeps: {
//         intro: {
//             sources: [{src: introSound.href, type: 'audio/mpeg'}],
//         },
//         enter: {
//             sources: [{src: enterSound.href, type: 'audio/mpeg'}],
//         },
//         click: {
//             sources: [{src: clickSound.href, type: 'audio/mpeg'}],
//         },
//         hover: {
//             sources: [{src: hoverSound.href, type: 'audio/mpeg'}],
//         },
//         expand: {
//             sources: [{src: expandSound.href, type: 'audio/mpeg'}],
//         },
//         fade: {
//             sources: [{src: fadeSound.href, type: 'audio/mpeg'}],
//         },
//     }
// };


export default function App() {
    return (
        <ThemeProvider theme={createTheme()}>
            <AnimatorGeneralProvider {...animatorsSettings}>
                {/*<BleepsProvider {...bleepsSettings}>*/}
                    {useRoutes(routes)}
                {/*</BleepsProvider>*/}
            </AnimatorGeneralProvider>
        </ThemeProvider>
    );
}
