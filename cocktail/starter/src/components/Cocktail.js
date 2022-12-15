import React from 'react'

const Cocktail = ({ id, name, image, info, glass, setCocktailId, setView }) => {
  return (
    <section className="bg-white shadow rounded tarnsition-all delay-75 ease-linear hover:translate-y-1">
      <img src={image} alt={name} className="rounded-t-xl" />
      
    </section>
  )
}

export default Cocktail
