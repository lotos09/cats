import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import {imagesReducer} from "./reducers/imagesReducer";
import {breedsReducer} from "./reducers/breedsReducer";
import {inputReducer} from "./reducers/inputReducer";

export const store = createStore(combineReducers({
    breedImagesSlice: imagesReducer,
    breedsSlice: breedsReducer,
    inputSlice: inputReducer,
}), applyMiddleware(thunk));
