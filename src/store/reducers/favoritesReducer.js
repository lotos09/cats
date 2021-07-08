export const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case 'favorites/addFavorite':
            return [...state, action.payload];
        case 'favorites/removeFavorite':
            return state.filter(item => item !== action.payload);
        case 'favorites/loadFromLocalStorage':
            return action.payload;
        default: return state;
    }
}

