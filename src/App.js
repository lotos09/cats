import './App.css';
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadBreedImages, loadBreeds} from './components/reducer_and_actions';
import {Breed} from "./components/breedRender";
import {BreedInfo} from "./components/BreedInfo";
//MUI
import { makeStyles, Button, ButtonGroup, Input } from '@material-ui/core';
import { GridList, GridListTile, GridListTileBar, ListSubheader, IconButton} from '@material-ui/core';
import { useStyles } from './components/MUIStyles'


function App() {
    const classes = useStyles();
    const dispatch = useDispatch();

//load breeds
    const breedsState = useSelector(store=> store.breedsSlice);
    const filteredBreeds = breedsState.filter((item)=>item.image&&item.image.url);
    const [brState, setBrState] = useState([]);

    useEffect(()=> {
        dispatch(loadBreeds());
    },[dispatch] )

    const logBreedsBtn = () => console.log(breedsState);


//input block

const [inputState, setInputState] = useState('');
    const inputHandle = ({target})=> {
        setInputState(target.value);
    }

    useEffect(()=> {
        setBrState(filteredBreeds.filter(item=>item.name.toLowerCase().includes(inputState.toLowerCase())))
    }, [inputState])
    
  return (
    <div className="App">
        <div>
            <BreedInfo/>
            <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                <Button onClick={logBreedsBtn} >
                    Log breeds
                </Button>
                <Button onClick={()=> setBrState(filteredBreeds)} >
                    load breeds
                </Button>
                <Button onClick={()=> setBrState([])} >
                    clear breeds
                </Button>
            </ButtonGroup>
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
                {brState.map((item)=>{
                    return <Breed key={item.id} breed={item}/>
                })}
            </GridList>
        </div>
    </div>
  );
}

export default App;
