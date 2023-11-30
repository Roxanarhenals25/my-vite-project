import React from 'react'
import PropTypes from 'prop-types'

function Characters(props) {
    const {characters} = props;


return (
    <div className='characters'>
        <h1> Characters </h1>
        <span className='back-home'> Back Home </span>
        <div className='container-characters'>
            {characters.map((character, index) => (
                <div className='character-container' key={index}>
                    <p>{character.name}</p>
                </div>
            ))}
        </div>
    </div>
)
}

Characters.propTypes = {}

export default Characters
