import {useStyles} from "./BreedInfoStyles";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {loadBreedImages} from "../../../store/actions/imagesReducerActions";
import {CircularProgress, IconButton} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import {LikeButton} from "../LikeButton";


export function BreedInfo() {
    const classes = useStyles();
    let {breedId} = useParams();
    const dispatch = useDispatch();


    const selectedBreed = useSelector(store => store.breedsSlice.breeds.find((item) => item.id === breedId))

    const images = useSelector(store => store.breedImagesSlice);
    useEffect(() => {
        if (selectedBreed !== undefined)
            dispatch(loadBreedImages(selectedBreed.id))
    }, [dispatch, selectedBreed])


    return (
        <div className={classes.infoPage}>


            {Boolean(!images.length) && <div className={classes.spinner}>
                <CircularProgress/>
            </div>}
            {Boolean(images.length) &&
                <div className={classes.breedInfoGallery} >
                    {images.map((item) => (
                        <div className={classes.imageContainer} key={item}>
                            <img alt='breedImage' src={item} key={item}/>
                        </div>
                    ))}
                </div>}
            {selectedBreed !== undefined &&
            <div className={classes.paper}>

                <Paper elevation={1}>
                    <div>
                        <IconButton>
                            <LikeButton breedId={selectedBreed.id}/>
                        </IconButton>


                    </div>

                    <h2>{selectedBreed.name}</h2>
                    <ul>
                        <li>{selectedBreed.description}</li>
                        <li>{`Temperament: ${selectedBreed.temperament}`}</li>
                        <li>{selectedBreed.weight.metric} Kg or {selectedBreed.weight.imperial} Pounds</li>
                        <li>Wiki:<a href={selectedBreed.wikipedia_url}>click!</a></li>
                    </ul>
                </Paper>
            </div>}

        </div>
    );
}