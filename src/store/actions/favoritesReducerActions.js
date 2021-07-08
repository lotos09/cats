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