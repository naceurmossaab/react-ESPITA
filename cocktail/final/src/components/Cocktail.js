import React from 'react'

const Cocktail = ({ id, name, image, info, glass, setCocktailId, setView }) => {
  return (
    <article className="flex-cols bg-white shadow rounded transition-all delay-75 ease-linear hover:translate-y-1">
      <img className="rounded-t-xl" src={image} alt={name} />
      <div className="p-5 mb-1">
        <h3 className="font-semibold text-3xl">{name}</h3>
        <h4 className="font-medium text-lg">{glass}</h4>
        <p className="text-gray-500 text-sm mb-5">{info}</p>
        <span
          className="py-2 px-5 border rounded bg-slate-600 hover:bg-slate-500 font-semibold text-white cursor-pointer"
          onClick={() => { setView('cocktail'); setCocktailId(id); }}>details</span>
      </div>
    </article>
  )
}

export default Cocktail
