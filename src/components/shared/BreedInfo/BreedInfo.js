import {useStyles} from "./BreedInfoStyles";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {loadBreedImages} from "../../../store/actions/imagesReducerActions";
import {CircularProgress, IconButton} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import {LikeButton} from "../LikeButton";
import {Carousel} from "./Carousel";


export function BreedInfo() {
    const classes = useStyles();
    const {breedId} = useParams();
    const dispatch = useDispatch();


    const selectedBreed = useSelector(store => store.breedsSlice.breeds.find((item) => item.id === breedId))

    const images = useSelector(store => store.breedImagesSlice);
    useEffect(() => {
        if (selectedBreed)
            dispatch(loadBreedImages(selectedBreed.id))
    }, [dispatch, selectedBreed])


//Carousel

    const [open, setOpen] = useState(false);

    const [activeStep, setActiveStep] = useState(0);
    const handleClickOpen = (initStep) => {
        setActiveStep(initStep);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.infoPage}>
            <Carousel images={images} step={activeStep} openProp={open} close={handleClose}/>
            {!images.length && <div className={classes.spinner}>
                <CircularProgress/>
            </div>}
            {!!images.length &&
            <div className={classes.breedInfoGallery}>
                {images.map((item, index) => (
                    <div className={classes.imageContainer} key={item}>
                        <img onClick={() => handleClickOpen(index)} alt='breedImage' src={item} key={item}/>
                    </div>
                ))}
            </div>}
            {selectedBreed &&
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