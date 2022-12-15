import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'

const CocktailList = ({ cocktails, loading, setCocktailId, setView }) => {

  if(loading) return <Loading />
  if(!cocktails.length)
    return(
      <h2 className="text-3xl capitalize text-center mb-14 mt-4">
        no cocktails match your search criterea ...
      </h2>
    );
  
  return (
    <section className="pb-20 px-0">
      <h2 className="text-3xl capitalize text-center mb-14 mt-4">cocktails</h2>
      <div className="grid grid-cols-3 gap-8 w-[80vw] my-0 mx-auto">
        {cocktails.map(({ id, name, image, info, glass }) => (<Cocktail key={id} {...{ id, name, image, info, glass, setView, setCocktailId}} />))}
      </div>
    </section>
  )
}

export default CocktailList
