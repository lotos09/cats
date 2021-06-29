import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
//app components
import {BreedInfo} from "./BreedInfo";
import {chooseBreedAction} from "../store/actions/chooseBreedAction";
import {loadBreedImages} from "../store/actions/loadBreedImages";
import {loadBreeds} from "../store/actions/loadBreeds";

//MUI
import {GridListTileBar, Input} from '@material-ui/core';
import {GridList, GridListTile, CircularProgress} from '@material-ui/core';
import {NavBar} from "./NavBar";
import {useStyles} from "../styles/galleryStyles";




function Gallery() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [inputState, setInputState] = useState('');
    const inputHandle = ({target}) => {
        setInputState(target.value);
    }
//load breeds
    const breedsState = useSelector(store => store.breedsSlice);
    let loading = breedsState.loading;

    const filteredBreeds = breedsState.breeds.filter((item) => {
        return item.image && item.image.url && item.name.toLowerCase().includes(inputState.toLowerCase())
    });

    useEffect(() => {
        dispatch(loadBreeds());
    }, [dispatch])


    return (
        <div className={classes.gallery}>
            <NavBar/>
            <BreedInfo/>

            <Input type='text' placeholder='search' id="outlined-basic"
                   label="Outlined" variant="outlined"
                   color='secondary'
                   value={inputState} onChange={inputHandle}/>

            <h2>Gallery</h2>
            {loading && <div className={classes.root}>
                <CircularProgress/>
            </div>}
            <GridList className={classes.gridList}>

                {!loading && filteredBreeds.map((item) => {
                    return <Breed key={item.id} breed={item}/>
                })}
            </GridList>
        </div>
    );
}

const Breed = ({breed}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loadBreedImages(breed.id))
        dispatch(chooseBreedAction(breed.id))
    }

    return (
        <GridListTile className={classes.gridListTile} key={breed.id} onClick={()=>{
            handleClick()
            window.scroll({
                top: 42,
                left: 100,
                behavior: 'smooth'
            })
        }}>
            <img alt={breed.name} src={breed.image.url}/>
            <GridListTileBar
                className={classes.gridListTileBar}
                title={breed.name}
                onClick={handleClick}
            />
        </GridListTile>

    )
}

export default Gallery;


