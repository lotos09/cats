import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadBreedImages} from "./reducer_and_actions";
import {chooseBreedAction} from "./reducer_and_actions";
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { useStyles } from './MUIStyles';

export const Breed = (props) => {
    const classes = useStyles();
    const obj = props.breed;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loadBreedImages(obj.id))
        dispatch(chooseBreedAction(obj.id))
    }

    return (
        <GridListTile className={classes.gridListTile} key={obj.id}>
            <img alt={obj.name} src={obj.image.url} />
            <GridListTileBar
                style={{
                    cursor:'pointer'
                }}
                title={obj.name}
                onClick={()=> handleClick()}
            />
        </GridListTile>

    )
}