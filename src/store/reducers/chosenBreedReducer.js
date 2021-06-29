export const chosenBreedReducer = (state='', action) => {
    switch (action.type) {
        case 'clickedBreed/setClickedBreed':
            return action.payload
        default: return state;
    }
}