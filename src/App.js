import './App.css';
import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
//app components
import { loadBreeds } from './components/reducer_and_actions';
import { Breed } from "./components/breedRender";
import { BreedInfo } from "./components/BreedInfo";

//MUI
import { Button, ButtonGroup, Input } from '@material-ui/core';
import { GridList, GridListTile, ListSubheader, CircularProgress} from '@material-ui/core';
import { useStylesApp } from './components/MUIStyles'
import {Link} from "react-router-dom";



function App() {


    const classes = useStylesApp();
    const dispatch = useDispatch();

    const [inputState, setInputState] = useState('');
    const inputHandle = ({target})=> {
        setInputState(target.value);
    }
//load breeds
    const breedsState = useSelector(store=> store.breedsSlice);
    let loading = breedsState.loading;

    const filteredBreeds = breedsState.breeds.filter((item)=> {
        return item.image && item.image.url && item.name.toLowerCase().includes(inputState.toLowerCase())
    });

    useEffect(()=> {
        dispatch(loadBreeds());
    },[dispatch] )

    
  return (
    <div className="App">
        <div>
            <div>
                <ButtonGroup variant="contained" color="primary">
                    <Button>
                        <Link to='/'>Home</Link>
                    </Button>
                    <Button>
                        <Link to='/app'>app</Link>
                    </Button>
                    <Button>
                        <Link to='/dataGrid'>DataGrid</Link>
                    </Button>
                    <Button>
                        <Link to='/table'>Table</Link>
                    </Button>
                </ButtonGroup>
            </div>
            <BreedInfo/>
        </div>

        <Input type='text' placeholder='search' id="outlined-basic"
               label="Outlined" variant="outlined"
               color='secondary'
               value={inputState} onChange={inputHandle}/>
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Cat Breeds</ListSubheader>
                </GridListTile>
                {loading && <div className={classes.root}>
                    <CircularProgress />
                </div>}
                {!loading && filteredBreeds.map((item)=>{
                    return <Breed key={item.id} breed={item}/>
                })}

            </GridList>
        </div>
    </div>
  );
}

export default App;


