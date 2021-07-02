const initialState = {loading: true, breeds: []};

export const breedsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'breeds/loadBreeds':
            return {loading: false, breeds: action.payload}
        default:
            return state;
    }
}