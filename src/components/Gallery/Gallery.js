import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
//app components
import {loadBreeds} from "../../store/actions/breedsReducerActions";
import {Breed} from "../shared/Breed/Breed";
//MUI
import {GridList, CircularProgress} from '@material-ui/core';
import {useStyles} from "./galleryStyles";

export function Gallery() {
    const classes = useStyles();
    const dispatch = useDispatch();

//load breeds
    const loading = useSelector(store => store.breedsSlice.loading);
    const inputState = useSelector(store => store.inputSlice)
    const filteredBreeds = useSelector(store => store.breedsSlice.breeds.filter((item) => {
        return item.image && item.image.url && item.name.toLowerCase().includes(inputState.toLowerCase())
    }))

    useEffect(() => {
        dispatch(loadBreeds());
    }, [dispatch])

    console.log(window)
    return (
        <div className={classes.gallery}>
            {loading && <div>
                <CircularProgress/>
            </div>}
            <GridList className={classes.gridList}>
                {!loading && filteredBreeds.map((item) => <Breed key={item.id} breed={item}/>)}
            </GridList>
        </div>
    );
}




