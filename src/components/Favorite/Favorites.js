import React from 'react';
import {useSelector} from "react-redux";
import {GridList} from "@material-ui/core";
import {Breed} from "../shared/Breed/Breed";
import {useStyles} from "./FavoritesStyles";


export function Favorites() {
    const classes = useStyles();
    const favoriteIdsState = useSelector(store => store.favorites);

    const breeds = useSelector(store => store.breedsSlice.breeds.filter((item)=> favoriteIdsState.includes(item.id)));


    const inputState = useSelector(store => store.inputSlice)
    const filteredBreeds = breeds.filter((item) => {
        return item.image && item.image.url && item.name.toLowerCase().includes(inputState.toLowerCase())
    });

    return (
        <div className={classes.gallery}>
            <GridList className={classes.gridList}>
                {filteredBreeds.map((item)=> {
                    return <Breed key={item.id} breed={item}/>
                })}
            </GridList>

        </div>
    )
}