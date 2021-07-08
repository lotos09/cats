import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {Box, Button, ButtonGroup, Drawer, IconButton} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {loadBreeds} from "../../../store/actions/breedsReducerActions";
import {inputAction} from "../../../store/actions/inputAction";
import {useStyles} from "./AppBarStyles";
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

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

//drawer
    const [drawerState, setDrawerState] = useState(false);
    const toggleDrawerClick = () => {
        setDrawerState(!drawerState)
    }

    return (
        <div className={classes.root}>
            <Drawer open={drawerState} onClose={toggleDrawerClick}>
                <ButtonGroup size='large' orientation="vertical" color="primary" onClick={toggleDrawerClick}>
                    <Button component={Link} to='/'>home</Button>
                    <Button component={Link} to='/gallery'>gallery</Button>
                    <Button component={Link} to='/table'>table</Button>
                    <Button component={Link} to='/favorites' >favorites</Button>
                </ButtonGroup>
            </Drawer>
            <Box height={76}>
                <AppBar position="fixed">
                    <Toolbar className={classes.toolBar}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawerClick}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Cat breeds info
                        </Typography>

                        <ButtonGroup variant="contained" color="primary" className={classes.buttonGroup}>
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
            </Box>

        </div>
    );
}
