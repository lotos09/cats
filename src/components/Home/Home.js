import React from "react";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import logo from '../../assets/donVito.jpg';
import {useStyles} from "./homeStyles";


export const Home = () => {
    const classes = useStyles();
    const history = useHistory();

    const galleryClick = () => {
        history.push('/gallery')
    }

    return (
        <div className={classes.root}>
            <img src={logo} alt='Don Vito'/>
            <Button className={classes.btn} onClick={galleryClick}
                    variant='contained' color='primary'>
                Ask don vito with respect
            </Button>
        </div>
    )
}