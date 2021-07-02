import {getBreeds} from "../../API/api";

export const loadBreeds = () => {
    return async (dispatch, getState) => {
        const payload = await getBreeds();
        dispatch({
            type: 'breeds/loadBreeds',
            payload: payload

        })
    }
}

