import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import {BasePathProvider} from "./context/BasePathContext";
import MainContainer from "./features/main/MainContainer";

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
    return (
        <ThemeProvider theme={theme}>
            <BasePathProvider>
                <MainContainer/>
            </BasePathProvider>
        </ThemeProvider>
    );
}

export default App;
