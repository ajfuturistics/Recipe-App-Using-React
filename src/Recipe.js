import style from './Recipe.module.css';
const Recipe = ({title, calories, image, ingredients, cuisineType}) => {

    return (
        <div className={style.recipe}>
            <img className={style.image} src={image} alt="" />
            <h1>{title}</h1>
            <p>Cuisine Type: {cuisineType}</p>
            <p>Calories: {calories}</p>
            <ul className={style.listitems}>
            <h3>Ingredients Required:</h3>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recipe;