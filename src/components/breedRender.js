import React from "react";
import {useDispatch} from "react-redux";
import {loadBreedImages} from "./reducer_and_actions";
import {chooseBreedAction} from "./reducer_and_actions";
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { useStylesApp } from './MUIStyles';

export const Breed = (props) => {
    const classes = useStylesApp();
    const obj = props.breed;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loadBreedImages(obj.id))
        dispatch(chooseBreedAction(obj.id))
    }

    return (
        <GridListTile className={classes.gridListTile} key={obj.id}>
            <img className={classes.gridImg} alt={obj.name} src={obj.image.url} />
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

