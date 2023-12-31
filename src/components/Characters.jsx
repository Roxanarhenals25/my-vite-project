import React from 'react'
import PropTypes from 'prop-types'

export default function Characters(props) {
    const {characters, setCharacters} = props;

    const resetCharacter = () => {
        setCharacters(null);
    };

    return (
        <div className='characters'>
        <h1> Characters </h1>
        <div className='container-characters'>
            {characters.map((character, index) => (
            <div className='character-container' key={index}>
                <div>
                <img src={character.image} alt={character.name} />
                </div>
                <div>
                <h3>{character.name}</h3>
                <h6>
                    {character.status === "Alive" ? (
                    <>
                        <span className='alive'/> Alive
                    </>
                    ) : (
                    <>
                        <span className='dead'/> Dead
                    </>
                    )}
                </h6>
                <p>
                    <span className='text-grey'> Episodes: </span>
                    <span>{character.episode.length}</span>
                </p>
                <p>
                    <span className='text-grey'> Species: </span>
                    <span>{character.species}</span>
                </p>
                </div>
            </div>
            ))}
        </div>
        <span className='back-home' onClick={resetCharacter}> Back Home </span>
        </div>
    );   
}

Characters.propTypes = {
    characters: PropTypes.array.isRequired,
    setCharacters: PropTypes.func.isRequired,
};


