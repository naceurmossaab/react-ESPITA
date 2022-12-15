import React, { useEffect, useState } from 'react'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
// import components
import Navbar from './components/Navbar'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function App() {
  const [view, setView] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
    try {
      const response = await fetch(url+searchTerm)
      const { drinks } = await response.json();
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass
          } = drink;
          return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass }
        })
        setCocktails(newCocktails);
        console.log(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      setCocktails([]);
    }
  }

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);
  return (
    <div>
      <Navbar {...{ view, setView }} />
      {
        view === 'home' ? <Home {...{ searchTerm, setSearchTerm, cocktails }} /> :
          view === 'about' ? <About /> :
            <SingleCocktail />
      }
    </div>
  )
}

export default App
