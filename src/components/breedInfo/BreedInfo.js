import React from "react";
import {useSelector} from "react-redux";
import { Paper } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import {useStyles} from "./breedInfoStyles";



export const BreedInfo = () => {
    const classes = useStyles();
//
    const images = useSelector(store=> store.breedImagesSlice);
    const clickedBreed = useSelector(store=>store.clickedBreed)
    const selectedBreedObjFromStore = useSelector((store) =>{
        return store.breedsSlice.breeds.find((obj)=> obj.id === clickedBreed)
    })

    if (clickedBreed === '') {
        return <p>choose your fighter</p>
    }
    return (
        <div className={classes.root}>
            <Paper>
                <div className={classes.images}>
                    {images.map((item, index)=>(
                        <div className={classes.imgContainer}>
                            <img alt='breedImage' className={classes.img} src={item} key={index}/>
                        </div>
                    ))}
                </div>
            </Paper>


            <div className={classes.paper}>
                <Paper elevation={3}>
                    <StarIcon/>
                    <h2>{selectedBreedObjFromStore.name}</h2>
                    <div>{selectedBreedObjFromStore.description}</div>
                    <div>{`Temperament: ${selectedBreedObjFromStore.temperament}`}</div>
                </Paper>

            </div>
        </div>
    )
}
