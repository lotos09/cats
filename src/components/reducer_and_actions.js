import {getBreedImages} from "./api";
import {getBreeds} from './api';


//breed images
const initialState = [];
export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'imgCat/getImgCat':
            return action.payload.map((item) => item.url)
        default: return state;
    }
}

export const loadBreedImages = (breedName) => {
    return async (dispatch, getState) => {
        const payload = await getBreedImages(breedName);
        dispatch({
            type: 'imgCat/getImgCat',
            payload: payload
        })
    }
}

//all breeds info
export const breedsReducer = (state = {loading: true, breeds: []}, action) => {
    switch (action.type) {
        case 'breeds/loadBreeds':
            return {loading: false, breeds: action.payload}
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

export const chosenBreedReducer = (state='', action) => {
    switch (action.type) {
        case 'clickedBreed/setClickedBreed':
            return action.payload
        default: return state;
    }
}

export const chooseBreedAction = (clickedBreedName) => {
    return {
        type: 'clickedBreed/setClickedBreed',
        payload: clickedBreedName
    }
}
