import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {imagesReducer, breedsReducer, chosenBreedReducer} from './reducer_and_actions'


export const store = createStore(combineReducers({
    breedImagesSlice: imagesReducer,
    breedsSlice: breedsReducer,
    clickedBreed: chosenBreedReducer
}), applyMiddleware(thunk));
