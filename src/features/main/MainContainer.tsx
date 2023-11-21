import * as React from "react";
import {useBasePath} from '../../context/BasePathContext';
import AppbarProvider from "../../context/appbarContext";
import Main from "./Main";

function DetailsTempContainer() {
    const basePath = useBasePath() || '';

    return (
        <>
            <AppbarProvider basePath={basePath}>
                <Main/>
            </AppbarProvider>
        </>
    );
}

export default DetailsTempContainer;