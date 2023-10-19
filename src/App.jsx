import React from 'react';
import {
    ThemeProvider,
    createTheme,
} from 'arwes';
import {useRoutes} from "react-router-dom";
import routes from "./routes/index.jsx";
import {AnimatorGeneralProvider} from "@arwes/react-animator";
import {BleepsProvider} from "@arwes/react-bleeps";

const animatorsSettings= {
    duration: {
        enter: 0.2,
        exit: 0.2,
        stagger: 0.04
    }
};

const bleepsSettings = {
    // Shared global audio settings.
    master: {
        volume: 0.9
    },
    bleeps: {
        intro: {
            sources: [{src: '/assets/intro.webm', type: 'audio/mpeg'}],
        },
        enter: {
            sources: [{src: '/assets/intro2.webm', type: 'audio/mpeg'}],
        },
        click: {
            sources: [{src: '/assets/click.mp3', type: 'audio/mpeg'}],
        },
        hover: {
            sources: [{src: '/assets/hover.webm', type: 'audio/mpeg'}],
        }
    }
};


export default function App() {
    return (
        <ThemeProvider theme={createTheme()}>
            <AnimatorGeneralProvider {...animatorsSettings}>
                <BleepsProvider {...bleepsSettings}>
                    {useRoutes(routes)}
                </BleepsProvider>
            </AnimatorGeneralProvider>
        </ThemeProvider>
    );
}
