import {getBreedImages} from "../../API/api";

export const loadBreedImages = (breedName) => {
    return async (dispatch) => {
        const payload = await getBreedImages(breedName);
        dispatch({
            type: 'imgCat/getImgCat',
            payload: payload
        })
    }
}

export const clearImagesReducerAction = () => {
    return {
        type: 'imgCat/clearState',
        payload: []
    }
}