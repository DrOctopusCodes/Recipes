import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App=()=>{

  const APP_ID = '95f8434d'
  const APP_KEY = '8394405730468343a8bcb75986f2ed2b'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('cheese')

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(()=>{
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return(
    <div className='App'>
    <h1 className='title'>Recipes</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input type='text' className='search-bar' value={search} onChange={updateSearch}/>
        <button type='submit' className='search-button'> Search </button>
      </form>
      {
        recipes.map((recipe, index) => (
        <div className='recipe'  key={index}>
          <Recipe title={recipe.recipe.label} 
          img={recipe.recipe.image} 
          calories={recipe.recipe.calories} 
          ingredients={recipe.recipe.ingredients}
          />
        </div>
      ))
      }
    </div>
  )
}

export default App;
