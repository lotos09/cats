import React from "react";




export const Breed = (props) => {
    const obj = props.breed;

    return (
        <div>
            <p>{obj.name}</p>
            <img alt={obj.name} src={obj.image.url}/>
        </div>
    )
}