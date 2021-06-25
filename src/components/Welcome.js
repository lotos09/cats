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
import {Button, ButtonGroup} from "@material-ui/core";

function Home() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadBreeds());
    },[dispatch] )

    return (
        <div>
                <ButtonGroup variant="contained" color="primary">
                    <Button>
                        <Link to='/'>Home</Link>
                    </Button>
                    <Button>
                        <Link to='/app'>app</Link>
                    </Button>
                    <Button>
                        <Link to='/dataGrid'>DataGrid</Link>
                    </Button>
                    <Button>
                        <Link to='/table'>Table</Link>
                    </Button>
                </ButtonGroup>
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