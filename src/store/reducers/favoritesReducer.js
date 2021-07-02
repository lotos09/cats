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

export const addFavoriteAction = (id) => {
    return {
        type: 'favorites/addFavorite',
        payload: id
    }
}

export const removeFromFavoritesAction = (id) => {
    return {
        type: 'favorites/removeFavorite',
        payload: id
    }
}
