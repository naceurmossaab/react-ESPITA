import React from 'react'
import { Link } from 'react-router-dom'

const PokemonThumb = ({id, image, name, type }) => {
    return (
        <div className={`${type} thumb-container`}>
        </div>
    )
}

export default PokemonThumb 