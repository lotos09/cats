import {useStyles} from "./BreedStyles";
import {useDispatch} from "react-redux";
import {clearImagesReducerAction} from "../../../store/actions/imagesReducerActions";
import {GridListTile, GridListTileBar} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';
import {LikeButton} from "../LikeButton";


export const Breed = ({breed}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(clearImagesReducerAction())

    }

    return (
        <GridListTile className={classes.gridListTile} key={breed.id}>
            <img alt={breed.name} src={breed.image.url}/>
            <GridListTileBar
                title={breed.name}
                className={classes.gridListTileBar}
                actionIcon={
                    <div className={classes.icons}>
                        <Link to={`/gallery/${breed.id}`}>
                            <InfoIcon className={classes.icon} onClick={handleClick}/>
                        </Link>
                        <LikeButton breedId={breed.id}/>
                    </div>
                }
            />
        </GridListTile>

    )
}
