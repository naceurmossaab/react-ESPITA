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
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [cocktailId, setCocktailId] = useState(null);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const { drinks } = await response.json();
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass
          };
        });
        setCocktails(newCocktails);
      } else setCocktails([]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrinks();
    // eslint-disable-next-line
  }, [searchTerm]);

  const routerFN = () => {
    if (view === 'home') return <Home {...{ setView, setCocktailId, setSearchTerm, cocktails, loading }} />
    else if (view === 'cocktail') return <SingleCocktail id={cocktailId} setView={setView} />
    else return <About />

  }

  return (
    <div className="bg-gray-100">
      <Navbar {...{ view, setView }} />
      {routerFN()}
    </div>
  )
}

export default App
