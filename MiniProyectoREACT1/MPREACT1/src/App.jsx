import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react';

//setCharacterList= Setter
//useState([array de dependencias])

  const App = () => {
    const [characterList, setCharacterList] = useState([]);
  const [characterFalse, setCharacterfalse]= useState(false);
    useEffect(() => {
      (async () => {
        let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
          (res) => res.json()
        );
        
  
        setCharacterList(data.results);
      })();

    }, []);
    useEffect( () => {
      console.log(characterList)
    } , [characterList] )


    return (
      <>
        {characterList.map((character) => {
          if(character.status=="Alive"){
            return (
            <div key={character.id}>
            <h2>name: {character.name}</h2>
            <h3>id: {character.id}</h3>
            <img src={character.image}/>
            {character.status=="Alive"?<p>"Alive"status:{character.status}</p> : <p>"Dead"{character.status}</p>}
            <h4>Origin:{character.origin.name}</h4>
          </div>
  )
  
           }
  
        }
          
        )}
      </>
    );
  };



export default App

