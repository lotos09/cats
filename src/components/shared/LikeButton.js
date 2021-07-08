import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {useDispatch, useSelector} from "react-redux";
import {addFavoriteAction, removeFromFavoritesAction} from "../../store/actions/favoritesReducerActions";

export function LikeButton({breedId}) {
    const dispatch = useDispatch();

    const likeDislike = () => {
        if (favoriteIdsState.includes(breedId)) {
            dispatch(removeFromFavoritesAction(breedId))
        } else dispatch(addFavoriteAction(breedId))
    }
    const favoriteIdsState = useSelector(store => store.favorites);

    return (
        <FavoriteIcon onClick={likeDislike} color={favoriteIdsState.includes(breedId) ? 'secondary' : 'primary'}/>
    )
}