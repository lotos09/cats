import React from "react";
import {Button, Menu, MenuItem} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import logo from '../media/don.jpg';
import {useStyles} from "../styles/homeStyles";



export const Home = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    let history = useHistory();


    function galleryClick() {
        history.push('/gallery')
    }

    function tableClick() {
        history.push('/table')
    }

    return (
        <div className={classes.root}>
            <img src={logo} alt='Don Vito image'/>
            <Button className={classes.btn} aria-controls="simple-menu" aria-haspopup="true"
                    variant='contained' color='primary'
                    onClick={handleClick}>
                Ask don vito with respect
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={galleryClick}>gallery</MenuItem>
                <MenuItem onClick={tableClick}>table</MenuItem>
            </Menu>
        </div>
    )
}