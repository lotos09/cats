import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import {imagesReducer} from "./reducers/imagesReducer";
import {breedsReducer} from "./reducers/breedsReducer";
import {chosenBreedReducer} from "./reducers/chosenBreedReducer";

export const store = createStore(combineReducers({
    breedImagesSlice: imagesReducer,
    breedsSlice: breedsReducer,
    clickedBreed: chosenBreedReducer
}), applyMiddleware(thunk));
