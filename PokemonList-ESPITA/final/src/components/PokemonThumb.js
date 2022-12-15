import React from 'react'
import { Link } from 'react-router-dom'

const PokemonThumb = ({id, image, name, type }) => {
    return (
        <div className={`${type} thumb-container`}>
            <div className="number"><small>#0{id}</small></div>
            <Link to={`/details/${name}`}>
            <img src={image} alt={name} />
            </Link>
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type:{type}</small>
            </div>
        </div>
    )
}

export default PokemonThumb 