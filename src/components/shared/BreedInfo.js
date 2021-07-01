import {useStyles} from "../Table-DataGrid/tableStyles";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {loadBreedImages} from "../../store/actions/imagesReducerActions";
import {CircularProgress} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

export function BreedInfo() {
    const classes = useStyles();
    let {breedId} = useParams();
    const selectedBreed = useSelector(store => store.breedsSlice.breeds.find((item) => item.id === breedId))
    const images = useSelector(store => store.breedImagesSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedBreed !== undefined)
            dispatch(loadBreedImages(selectedBreed.id))
    }, [dispatch, selectedBreed])

    if (selectedBreed === undefined) {
        return <p>choose your fighter</p>
    } else
        return (
            <div className={classes.infoPage}>
                <h2>{selectedBreed.name}</h2>

                {Boolean(!images.length) && <div className={classes.spinner}>
                    <CircularProgress/>
                </div>}
                {Boolean(images.length) && <div className={classes.gridList}>
                    {images.map((item) => (
                        <img className={classes.gridImg} alt='breedImage' src={item} key={item}/>
                    ))}
                </div>}

                <div className={classes.paper}>
                    <Paper elevation={1}>
                        <ul>
                            <li>{selectedBreed.description}</li>
                            <li>{`Temperament: ${selectedBreed.temperament}`}</li>
                            <li>{selectedBreed.weight.metric} Kg or {selectedBreed.weight.imperial} Pounds</li>
                            <li>Wiki:<a href={selectedBreed.wikipedia_url}>click!</a></li>
                        </ul>
                    </Paper>
                </div>
            </div>
        );
}