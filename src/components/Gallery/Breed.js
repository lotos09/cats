import {useStyles} from "./galleryStyles";
import {useDispatch} from "react-redux";
import {clearImagesReducerAction} from "../../store/actions/imagesReducerActions";
import {GridListTile, GridListTileBar} from "@material-ui/core";
import React from "react";
import {useHistory} from "react-router-dom";

export const Breed = ({breed}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let history = useHistory();
    const handleClick = (id) => {
            dispatch(clearImagesReducerAction())
            history.push(`/gallery/${id}`)
    }
    return (
        <GridListTile className={classes.gridListTile} key={breed.id} onClick={()=>{
            handleClick(breed.id)
        }}>
            <img alt={breed.name} src={breed.image.url}/>
            <GridListTileBar
                className={classes.gridListTileBar}
                title={breed.name}
                onClick={handleClick}
            />
        </GridListTile>
    )
}