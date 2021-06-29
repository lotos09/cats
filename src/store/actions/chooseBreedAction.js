export const chooseBreedAction = (clickedBreedName) => {
    return {
        type: 'clickedBreed/setClickedBreed',
        payload: clickedBreedName
    }
}