import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import PokemonThumb from '../components/PokemonThumb'


const Home = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const { next, results } = await res.json()
    setLoadMore(next)
    results.forEach(async pokemon => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await res.json()
      setAllPokemons(prev => [...prev, data]);
    })
    setAllPokemons(prev => [...prev].sort((a, b) => a.Type > b.Type));
  }

  useEffect(() => {
    getAllPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!allPokemons.length) return (<Loader />)

  return (
    <>
      <Navbar />
      <div className="app-contaner">
        <h1>Pokemon Evolution</h1>
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.map((pokemonStats, index) =>
              <PokemonThumb
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />)}
          </div>
          <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;