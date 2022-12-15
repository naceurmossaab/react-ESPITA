import React, { useEffect } from 'react'

const SearchForm = ({ setSearchTerm }) => {
  const search = React.useRef('');
  const [searchValue, setSearchValue] = React.useState('');

  const searchCocktail = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue);
  }

  // useEffect(() => search.current.focus(), []);

  return (
    <section className="py-20 px-0">
      <form
        className="w-[85vw] my-0 mx-auto max-w-2xl bg-white py-8 px-10 capitalize rounded shadow"
        onSubmit={(e) => searchCocktail(e)}>
        <div className="flex-col space-y-3">
          <label className="text-green-800 text-2xl font-semibold" htmlFor="name">search your favorite cocktail</label>
          <div className="flex justify-between">
            <input className="p-3 w-full border-0 bg-green-50 mr-5" type="text" id="name" value={searchValue} ref={search} onChange={(e) => setSearchValue(e.target.value)} />
            <button className="border py-3 w-24 rounded bg-green-900 text-white font-bold hover:bg-green-700" type="submit">Find</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
