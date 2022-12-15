import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import PokemonThumb from '../components/PokemonThumb'


const Home = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')

  const getAllPokemons = () => {}

  return (
    <>
    </>
  );
}

export default Home;