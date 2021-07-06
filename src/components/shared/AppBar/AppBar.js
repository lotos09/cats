import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {Button, ButtonGroup} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {loadBreeds} from "../../../store/actions/breedsReducerActions";
import {inputAction} from "../../../store/actions/inputAction";
import {useStyles} from "./AppBarStyles";
import {Link} from "react-router-dom";


export function SearchAppBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBreeds());
    }, [dispatch])

    const inputHandle = ({target}) => {
        dispatch(inputAction(target.value))
    }
    const inputState = useSelector(store => store.inputSlice)


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Cat breeds info
                    </Typography>

                    <ButtonGroup variant="contained" color="primary">
                        <Button component={Link} to='/' variant="contained" color="primary">home</Button>
                        <Button component={Link} to='/gallery' variant="contained" color="primary">gallery</Button>
                        <Button component={Link} to='/table' variant="contained" color="primary">table</Button>
                        <Button component={Link} to='/favorites' variant="contained" color="primary">favorites</Button>
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
    );
}
