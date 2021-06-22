import React from "react";
import {useSelector} from "react-redux";
import { GridList, GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: 'md',
        height: 'md',
    },
    tile: {
        minWidth: '400px'
    }
}));

export const BreedInfo = () => {
    const classes = useStyles();

    const state = useSelector(store=> store);
    const clickedBreed = state.clickedBreed;
    const selectedBreedObjFromStore = state.breedsSlice.filter((obj)=> obj.id === clickedBreed);


    if (clickedBreed === '') {
        return <p>choose your fighter</p>
    } else
    return (
        <div className={classes.root}>
            <GridList cellHeight={360}  className={classes.gridList} cols={5}>
                {state.breedImagesSlice.map((item, index)=>(
                    <GridListTile key={index} className={classes.tile}>
                        <img alt='breedImage' src={item} key={index}/>
                    </GridListTile>
                ))}
            </GridList>

            <div>
                <h2>{selectedBreedObjFromStore[0].name}</h2>
                <div>{selectedBreedObjFromStore[0].description}</div>
                <div>{`Temperament: ${selectedBreedObjFromStore[0].temperament}`}</div>
            </div>
        </div>
    )
}

/*
            <div className='breedImages'>
                {state.breedImagesSlice.map((item, index)=> {
                        return <img alt='breedImage' src={item} key={index}/>
                })}
            </div>
 */