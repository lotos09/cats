export const breedsReducer = (state = {loading: true, breeds: []}, action) => {
    switch (action.type) {
        case 'breeds/loadBreeds':
            return {loading: false, breeds: action.payload}
        default: return state;
    }
}