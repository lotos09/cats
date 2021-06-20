import {testRequest} from "./api";
import {getBreeds} from './api';


//random cat
const initialState = []
export const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'imgCat/getImgCat':
            return [...state, action.payload]
        default: return state;
    }
}

export const loadRandomCat = () => {
    return async (dispatch, getState) => {
        const payload = await testRequest();
        dispatch({
            type: 'imgCat/getImgCat',
            payload: payload
        })
    }
}

//all breeds info
export const breedsReducer = (state = [], action) => {
    switch (action.type) {
        case 'breeds/loadBreeds':
            return action.payload
        default: return state;
    }
}

export const loadBreeds = () => {
    return async (dispatch, getState) => {
        const payload = await getBreeds();
        dispatch({
            type: 'breeds/loadBreeds',
            payload: payload
        })
    }
}
