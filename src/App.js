import './App.css';
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadRandomCat, loadBreeds} from './components/reducer_and_actions';
import {Breed} from "./components/breedRender";

function App() {
  const dispatch = useDispatch();


//breeds
    const breedsState = useSelector(store=> store.breeds);
    const filteredBreeds = breedsState.filter((item)=>item.image);
    const [brState, setBrState] = useState([]);




    const logBreedsBtn = () => console.log(breedsState);
    useEffect(()=> {
        dispatch(loadBreeds());
    },[dispatch] )

//input block


    
  return (
    <div className="App">
        <div>buttons
            <button onClick={logBreedsBtn}>log breeds</button>
            <button onClick={()=> setBrState(filteredBreeds)}>load breeds</button>
            <button onClick={()=> setBrState([])}>clear breeds list</button>
        </div>
        <div className='breedsContainer'>
            {brState.map((item)=>{
                return <Breed key={item.id} breed={item}/>
            })}
        </div>
    </div>
  );
}

export default App;
