import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {loadBreeds} from "./reducer_and_actions";
import {Button, ButtonGroup, makeStyles} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
    }

}))

export function NavBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBreeds());
    }, [dispatch])

    let history = useHistory();


    function galleryClick() {
        history.push('/gallery')
    }
    function dataGridClick() {
        history.push('/dataGrid')
    }
    function tableClick() {
        history.push('/table')
    }
    function homeClick() {
        history.push('/')
    }

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="primary">
                <Button onClick={homeClick}>home</Button>
                <Button onClick={galleryClick}>gallery</Button>
                <Button onClick={dataGridClick}>dataGrid</Button>
                <Button onClick={tableClick}>table</Button>
            </ButtonGroup>

        </div>
    )
}

/*
export function NavBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadBreeds());
    },[dispatch] )

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="primary">
                <Button>
                    <Link to='/'>home</Link>
                </Button>
                <Button>
                    <Link to='/app'>Gallery</Link>
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
 */