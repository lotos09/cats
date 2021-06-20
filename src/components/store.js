import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {catReducer, breedsReducer} from './reducer_and_actions'


export const store = createStore(combineReducers({
    randomCat: catReducer,
    breeds: breedsReducer,
}), applyMiddleware(thunk));
