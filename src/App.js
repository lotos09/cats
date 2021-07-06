import {theme} from "./theme";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Routes} from "./Routes";
import {ThemeProvider} from "@material-ui/core/styles";
import React from "react";

export function App() {

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                    <Routes/>
            </Provider>
        </ThemeProvider>
    );
}