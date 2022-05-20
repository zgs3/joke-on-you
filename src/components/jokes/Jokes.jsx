import React, { useEffect, useState } from 'react'
import Joke from '../joke/Joke';
import './Jokes.css'
import Joke2 from '../../assets/joke2.png'

function Jokes() {

  const [jokes, setJokes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(response => response.json())
      .then(result => {
        setJokes(result.jokes);
        setLoaded(true);
      },
        (error) => {
          setError(error);
          setLoaded(true);
        })
  }, [])

  if (error) {
    return (
    <div className='container'>
      <div className='error'>
        Error: {error.message} :/
      </div>
    </div>
    )
  } else if (!loaded) {
    return (
      <div className='container'>
        <img src={Joke2} className='joke2' alt='meme troll'></img>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <div className='block'>
          <ul>
            {jokes.map((item) => {
              if (jokes !== []) {
                return (
                  <Joke key={item.id} type={item.type} joke={item.joke} setup={item.setup} delivery={item.delivery} />
                );
              };
            })}
          </ul>
        </div>
      </div>
    )
  }

}

export default Jokes;