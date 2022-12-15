import React from 'react'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'

const Home = ({ setView, setCocktailId, searchTerm, setSearchTerm, cocktails, loading }) => {
  return (
    <div>
      <SearchForm {...{ searchTerm, setSearchTerm }} />
      <CocktailList {...{cocktails}} />
    </div>
  )
}

export default Home
