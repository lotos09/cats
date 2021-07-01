import React from "react";
import {Gallery} from "./components/Gallery/Gallery";
import DataGridDemo from "./components/Table-DataGrid/DataGrid";
import {BreedsTable} from "./components/Table-DataGrid/BreedsTable";
import {Home} from "./components/Home/Home";
//Routes
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {SearchAppBar} from "./components/AppBar/AppBar";



export function Routes() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/appbar'>
                        <SearchAppBar/>
                    </Route>
                    <Route path='/gallery'>
                        <Gallery/>
                    </Route>
                    <Route path='/dataGrid'>
                        <DataGridDemo/>
                    </Route>
                    <Route path='/table'>
                        <BreedsTable/>
                    </Route>
                    <Route exact path='/'>
                        <Home/>
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}
