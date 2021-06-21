import React from "react";
import {useSelector} from "react-redux";


export const BreedInfo = () => {
    const state = useSelector(store=> store);
    const clickedBreed = state.clickedBreed;
    const selectedBreedObjFromStore = state.breedsSlice.filter((obj)=> obj.id === clickedBreed);


    if (clickedBreed === '') {
        return <p>choose your fighter</p>
    } else
    return (
        <div className='breedInfo'>
            <div className='breedImages'>
                {state.breedImagesSlice.map((item, index)=> {
                        return <img alt='breedImage' src={item} key={index}/>
                })}
            </div>
            <ul>
                <li>{selectedBreedObjFromStore[0].name}</li>
                <li>{selectedBreedObjFromStore[0].description}</li>
                <li>{`Temperament: ${selectedBreedObjFromStore[0].temperament}`}</li>
            </ul>
        </div>
    )
}