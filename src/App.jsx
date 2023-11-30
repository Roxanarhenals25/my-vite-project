import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';



function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const characterApi = await response.json();
      setCharacters(characterApi.results);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'> Rick & Morty </h1>
        { characters ? (
          <Characters characters={characters}/> 
        ) : (
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
          <button onClick={reqApi} className='btn-search'> search characters </button>
          </>
        ) }
      </header>
    </div>
  );
}

export default App
