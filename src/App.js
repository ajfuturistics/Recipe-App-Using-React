import { useEffect, useState } from 'react';
import './App.css';
import { APP_ID, APP_KEY } from './configs';
import Recipe from './Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    const responce = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await responce.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="App">
      <div className="navigation">
        <div className="title-logo">
          <a href="./">Recipe App</a>
        </div>
        <form className="search-form">
          <input type="text" className="search-bar" />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            cuisineType={recipe.recipe.cuisineType}
          /> 
        ))}
      </div>
    </div>
  );
}

export default App;
