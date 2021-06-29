import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {Button, ButtonGroup} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useStyles} from "../styles/navBarStyles";
import {loadBreeds} from "../store/actions/loadBreeds";


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
