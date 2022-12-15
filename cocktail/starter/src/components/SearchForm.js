import React, { useEffect } from 'react'
import { useState } from 'react';

const SearchForm = ({ setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState('')
  const searchCocktail = (e) =>{
    e.preventDefault();
    setSearchTerm(searchValue);
  }

  return (
    <div className="py-20 px-20">
      <form className="w-[85vw] my-0 mx-auto max-w-2xl bg-white py-8 px-10 capitalize rounded shadow">
        <div className="flex-col space-y-3">
          <label htmlFor="name" className="text-green-800 text-2xl font-semibold">
            search your favorite cocktail
          </label>
          <div className="flex justify-between">
            <input 
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            className="p-3 w-full border-0 bg-green-50 mr-5"
             type="text" name="" id="" />
            <button type="submit" onClick={(e) => searchCocktail(e)} className="border py-3 w-24 rounded bg-green-900 text-white font-bold hover:bg-green-700">
              Find
            </button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default SearchForm
