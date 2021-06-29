import '../App.css';
import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
//app components
import {chooseBreedAction, loadBreedImages, loadBreeds} from './reducer_and_actions';
import {BreedInfo} from "./BreedInfo";

//MUI
import {GridListTileBar, Input, makeStyles, Paper, Typography} from '@material-ui/core';
import {GridList, GridListTile, ListSubheader, CircularProgress} from '@material-ui/core';
import {NavBar} from "./NavBar";

const useStylesApp = makeStyles((theme) => ({

    gallery: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    gridList: {
        display: "flex",
        justifyContent: "center",
        width: '80%',
        height: '100%',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },

    gridListTile: {
        minWidth: 200,
        maxHeight: 300,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
    }

}))


function Gallery() {
    const classes = useStylesApp();
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

const Breed = (props) => {
    const classes = useStylesApp();
    const obj = props.breed;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loadBreedImages(obj.id))
        dispatch(chooseBreedAction(obj.id))
    }

    return (
        <GridListTile className={classes.gridListTile} key={obj.id} onClick={()=>{
            handleClick()
            window.scroll({
                top: 42,
                left: 100,
                behavior: 'smooth'
            })
        }}>
            <img className={classes.gridImg} alt={obj.name} src={obj.image.url}/>
            <GridListTileBar
                style={{
                    cursor: 'pointer'
                }}
                title={obj.name}
                onClick={() => handleClick()}
            />
        </GridListTile>

    )
}

export default Gallery;


