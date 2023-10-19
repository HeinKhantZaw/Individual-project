import React, { useCallback } from 'react';
import {
    ThemeProvider,
    createTheme,
} from 'arwes';
import Home from "./pages/Home/index.jsx";
import {useRoutes} from "react-router-dom";
import routes from "./routes/index.jsx";


export default function App() {
    return (
        <ThemeProvider theme={createTheme()}>
            {useRoutes(routes)}
        </ThemeProvider>
    );
}
