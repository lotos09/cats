import './App.css';
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadBreedImages, loadBreeds} from './components/reducer_and_actions';
import {Breed} from "./components/breedRender";
import {BreedInfo} from "./components/BreedInfo";
//MUI
import { Button } from '@material-ui/core';

function App() {
    const dispatch = useDispatch();

//breed info

//load breeds
    const breedsState = useSelector(store=> store.breedsSlice);
    const filteredBreeds = breedsState.filter((item)=>item.image);
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
        <BreedInfo/>
        <div>
            <Button onClick={logBreedsBtn} variant="contained" color="primary">
                Log breeds
            </Button>
            <Button onClick={()=> setBrState(filteredBreeds)} variant="contained" color="primary">
                load breeds
            </Button>
            <Button onClick={()=> setBrState([])} variant="contained" color="primary">
                clear breeds
            </Button>
        </div>
        <input type='text' value={inputState} onChange={inputHandle}/>

        <div className='breedsContainer'>
            {brState.map((item)=>{
                return <Breed key={item.id} breed={item}/>
            })}
        </div>
    </div>
  );
}

export default App;
