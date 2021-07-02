import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {Button, ButtonGroup} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {loadBreeds} from "../../../store/actions/breedsReducerActions";
import {useHistory, BrowserRouter as Router} from "react-router-dom";
import {inputAction} from "../../../store/actions/inputAction";
import {useStyles} from "./AppBarStyles";

export function SearchAppBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBreeds());
    }, [dispatch])

    const [inputState, setInputState] = useState('');
    const inputHandle = ({target}) => {
        setInputState(target.value);
    }
    useEffect(() => {
        dispatch(inputAction(inputState))
    }, [dispatch, inputState])


    let history = useHistory();

    function galleryClick() {
        history.push('/gallery')
    }

    function tableClick() {
        history.push('/table')
    }

    function homeClick() {
        history.push('/')
    }

    function favoritesClick() {
        history.push('/favorites')
    }

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolBar}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Cat breeds info
                        </Typography>

                        <ButtonGroup variant="contained" color="primary">
                            <Button onClick={homeClick}>home</Button>
                            <Button onClick={galleryClick}>gallery</Button>
                            <Button onClick={tableClick}>table</Button>
                            <Button onClick={favoritesClick}>favorites</Button>
                        </ButtonGroup>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                value={inputState} onChange={inputHandle}
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>

                    </Toolbar>
                </AppBar>
            </div>


        </Router>

    );
}
