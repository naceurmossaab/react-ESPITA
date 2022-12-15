import React from 'react'
import logo from '../logo.svg'

const Navbar = ({ view, setView }) => {
  return (
    <nav className="flex bg-white h-20 pt-5 items-center border-b-green-500 shadow">
      <div className="flex justify-between items-center w-full mx-10">
        <img src={logo} alt="cocktail db logo" className="w-72 cursor-pointer" onClick={() => setView('home')} />
        <ul className="flex space-x-5 items-center">
          <li
            className="text-lg font-semibold cursor-pointer"
            style={view === 'home' ? { color: '#476a2e' } : { color: '#777' }}
            onClick={() => setView('home')}>
            Home
          </li>
          <li
            className="text-lg font-semibold cursor-pointer"
            style={view === 'about' ? { color: '#476a2e' } : { color: '#777' }}
            onClick={() => setView('about')}>
            About
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
