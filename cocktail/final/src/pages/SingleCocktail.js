import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = ({id, setView}) => {
const [loading, setLoading] = useState(false);
const [cocktail, setCocktail] = useState(null);

useEffect(()=>{
  setLoading(true);
  async function getCocktail(){
    try {
      const response = await fetch(`${url}${id}`);
      const {drinks} = await response.json();

      if(drinks){
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];

        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };

        setCocktail(newCocktail);
      }else setCocktail(null);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  getCocktail();
}, [id]);

  if(loading) return <Loading />
  if(!cocktail) return <h2 className="text-3xl capitalize text-center mb-14 mt-4">no cocktail to display</h2>
  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;
  
  return (
    <section className="py-20 px-0 text-center">
      <span className="py-2 px-5 border rounded bg-slate-600 hover:bg-slate-500 font-semibold text-white cursor-pointer" onClick={()=>setView('home')}>
        back home
      </span>
      <h2 className='text-3xl font-bold capitalize text-center my-14'>{name}</h2>
      <div className="flex flex-row space-x-5 w-[85vw] max-w-6xl my-0 mx-auto text-left">
        <img className="rounded w-1/2 my-3" src={image} alt={name}></img>
        <div className="my-3 space-y-3">
          <p className="font-bold capitalize leading-7">
            <span className="mr-2 bg-green-400 py-1 px-2 rounded-md text-green-700">name :</span> {name}
          </p>
          <p className="font-bold capitalize leading-7">
            <span className="mr-2 bg-green-400 py-1 px-2 rounded-md text-green-700">category :</span> {category}
          </p>
          <p className="font-bold capitalize leading-7">
            <span className="mr-2 bg-green-400 py-1 px-2 rounded-md text-green-700">info :</span> {info}
          </p>
          <p className="font-bold capitalize leading-7">
            <span className="mr-2 bg-green-400 py-1 px-2 rounded-md text-green-700">glass :</span> {glass}
          </p>
          <p className="font-bold capitalize leading-7">
            <span className="mr-2 bg-green-400 py-1 px-2 rounded-md text-green-700">instructons :</span> {instructions}
          </p>
          <p className="font-bold capitalize leading-7">
            <span className="mr-2 bg-green-400 py-1 px-2 rounded-md text-green-700">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span className="mr-2" key={index}> {item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleCocktail
