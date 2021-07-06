import React from "react";
import {Gallery} from "./components/Gallery/Gallery";
import DataGridDemo from "./components/TableDataGrid/DataGrid";
import {BreedsTable} from "./components/TableDataGrid/BreedsTable";
import {Home} from "./components/Home/Home";
//Routes
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {SearchAppBar} from "./components/shared/AppBar/AppBar";
import {Favorites} from "./components/Favorite/Favorites";
import {BreedInfo} from "./components/shared/BreedInfo/BreedInfo";


export function Routes() {

    return (
        <Router>
            <div>
                <SearchAppBar/>
                <Switch>
                    <Route path='/favorites'>
                        <Favorites/>
                    </Route>
                    <Route exact path='/gallery'>
                        <Gallery/>
                    </Route>
                    <Route exact path={`/gallery/:breedId`}>
                        <BreedInfo/>
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
