import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
//app components
import {loadBreeds} from "../../store/actions/breedsReducerActions";
import {Breed} from "../shared/Breed/Breed";
//MUI
import {GridList, CircularProgress} from '@material-ui/core';
import {useStyles} from "./galleryStyles";
import {Route, Switch} from "react-router-dom";
import {BreedInfo} from "../shared/BreedInfo/BreedInfo";




export function Gallery() {
    const classes = useStyles();
    const dispatch = useDispatch();

//load breeds
    const breedsState = useSelector(store => store.breedsSlice);
    let loading = breedsState.loading;
    const inputState = useSelector(store => store.inputSlice)
    const filteredBreeds = breedsState.breeds.filter((item) => {
        return item.image && item.image.url && item.name.toLowerCase().includes(inputState.toLowerCase())
    });

    useEffect(() => {
        dispatch(loadBreeds());
    }, [dispatch])

    console.log(window)
    return (
        <div className={classes.gallery}>
            <Switch>
                <Route exact path={'/gallery'}>
                    {loading && <div>
                        <CircularProgress/>
                    </div>}
                    <GridList className={classes.gridList}>

                        {!loading && filteredBreeds.map((item) => {
                            return <Breed key={item.id} breed={item}/>
                        })}
                    </GridList>
                </Route>
                <Route path={`/gallery/:breedId`}>
                    <BreedInfo/>
                </Route>
            </Switch>


        </div>
    );
}




