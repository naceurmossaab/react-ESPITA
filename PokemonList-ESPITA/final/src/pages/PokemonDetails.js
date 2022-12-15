import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer';
import Loader from '../components/Loader';

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json()
      setPokemon(data);
      console.log(data);
    }
    fetchPokemon();
  }, [name]);

  if (!pokemon) return (<Loader />)

  return (
    <>
      <section className='py-5 text-center'>
        <Link to='/' className='btn btn-primary my-5'>
          back home
        </Link>
        <h2 className='section-title'>{pokemon.name}</h2>
        <div className='drink'>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {pokemon.name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {pokemon.types[0].type.name}
            </p>
            <p>
              <span className='drink-data'>height :</span> {pokemon.height}
            </p>
            <p>
              <span className='drink-data'>weight :</span> {pokemon.weight}
            </p>
            <p>
              <span className='drink-data'>experience :</span> {pokemon.base_experience}
            </p>
            <p>
              <span className='drink-data'>abilities :</span>
              {pokemon.abilities.map((item, index) => {
                return item ? <span key={index}> {item.ability?.name}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PokemonDetails