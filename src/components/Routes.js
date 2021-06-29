import React from "react";
import Gallery from "./Gallery";
import DataGridDemo from "./DataGrid";
import BasicTable from "./Table";

//Routes
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Home} from "./Home";

export function Routes() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/gallery'>
                        <Gallery/>
                    </Route>
                    <Route path='/dataGrid'>
                        <DataGridDemo/>
                    </Route>
                    <Route path='/table'>
                        <BasicTable/>
                    </Route>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
