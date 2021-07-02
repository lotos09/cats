import React, {useEffect, useState} from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {addFavoriteAction, removeFromFavoritesAction} from "../../store/reducers/favoritesReducer";
import {useDispatch, useSelector} from "react-redux";

export function LikeButton({breedId}) {
    const dispatch = useDispatch();

    const addFavoriteHandler = () => {
        dispatch(addFavoriteAction(breedId))
    }
    const removeFromFavoritesHandler = () => {
        dispatch(removeFromFavoritesAction(breedId))
    }
    const [color, setColor] = useState('primary')
    const likeDislike = () => {
        color === 'primary' ? setColor('secondary') : setColor('primary')
        favoriteIdsState.includes(breedId) ? removeFromFavoritesHandler() : addFavoriteHandler()
    }
    const favoriteIdsState = useSelector(store => store.favorites);
    useEffect(()=> {
        favoriteIdsState.includes(breedId) ? setColor('secondary') : setColor('primary')
    }, [breedId, favoriteIdsState])
    return (
            <FavoriteIcon onClick={likeDislike} color={color}/>
    )
}