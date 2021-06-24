import React, {useEffect} from "react";
import App from "../App";
import DataGridDemo from "./DataGrid";
import BasicTable from "./Table";

//Routes
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loadBreeds} from "./reducer_and_actions";

function Home() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadBreeds());
    },[dispatch] )

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/app'>app</Link>
                    </li>
                    <li>
                        <Link to='/dataGrid'>DataGrid</Link>
                    </li>
                    <li>
                        <Link to='/table'>Table</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )

}

export function Welcome() {
    return (
        <Router>
            <div>
                <Switch>

                    <Route path='/app'>
                        <App/>
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