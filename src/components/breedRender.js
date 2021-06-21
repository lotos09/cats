import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadBreedImages} from "./reducer_and_actions";
import {chooseBreedAction} from "./reducer_and_actions";



export const Breed = (props) => {
    const obj = props.breed;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(loadBreedImages(obj.id))
        dispatch(chooseBreedAction(obj.id))
    }

    return (
        <div>
            <p onClick={()=> handleClick()}>{obj.name}</p>
            <img alt={obj.name} src={obj.image.url}/>
        </div>
    )
}