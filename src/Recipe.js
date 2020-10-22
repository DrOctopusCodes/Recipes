import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, img, calories, ingredients}) => {
    return(
        <div className={style.recipe}>
        <h1>{title}</h1>
        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
            ))}
        </ul>
        <p>Calories: {Math.round(calories)}</p>
        <img className={style.image} src={img} alt=''/>
    </div>
    )
}

export default Recipe;