import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import {useBasePath} from "./context/BasePathContext";
import MainContainer from "./features/main/MainContainer";
import AppbarProvider from "./context/appbarContext";

const theme = createTheme({
    palette: {
        secondary: {
            light: '#7fb434',
            main: '#5FA202',
            dark: '#427101',
        },
        primary: {
            light: '#4b727a',
            main: '#1F4F59',
            dark: '#15373e',
        },
    },
    spacing: 8,
    typography: {
        fontFamily: [
            "Nunito Sans", 'sans-serif'
        ].join(',')
    }
});

function App() {
    const basePath = useBasePath() || '';
    return (
        <ThemeProvider theme={theme}>
            <AppbarProvider basePath={basePath}>
                <MainContainer/>
            </AppbarProvider>
        </ThemeProvider>
    );
}

export default App;
