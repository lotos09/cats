import {getBreedImages} from "../../API/api";

export const loadBreedImages = (breedName) => {
    return async (dispatch, getState) => {
        const payload = await getBreedImages(breedName);
        dispatch({
            type: 'imgCat/getImgCat',
            payload: payload
        })
    }
}