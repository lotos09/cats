import React from "react";
import {useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    images: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    imgContainer: {
        minWidth: 200,
        maxHeight: 300,
    },
    img: {
        maxHeight: 300,
    },
    paper: {
        display: 'flex',
        textAlign: "center",
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: 'auto',
            height: '100%',
            backgroundColor: '#C3CBD6',
            marginBottom: '50px'
        },
    },
}));

export const BreedInfo = () => {
    const classes = useStyles();
//
    const state = useSelector(store=> store);
    const clickedBreed = useSelector(store=>store.clickedBreed)
    const selectedBreedObjFromStore = state.breedsSlice.breeds.filter((obj)=> obj.id === clickedBreed);


    if (clickedBreed === '') {
        return <p>choose your fighter</p>
    } else
    return (
        <div className={classes.root}>
            <Paper>
                <div className={classes.images}>
                    {state.breedImagesSlice.map((item, index)=>(
                        <div className={classes.imgContainer}>
                            <img alt='breedImage' className={classes.img} src={item} key={index}/>
                        </div>
                    ))}
                </div>
            </Paper>


            <div className={classes.paper}>
                <Paper elevation={3}>
                    <StarIcon/>
                    <h2>{selectedBreedObjFromStore[0].name}</h2>
                    <div>{selectedBreedObjFromStore[0].description}</div>
                    <div>{`Temperament: ${selectedBreedObjFromStore[0].temperament}`}</div>
                </Paper>

            </div>
        </div>
    )
}
