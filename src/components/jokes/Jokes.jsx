import React, { useEffect, useState } from 'react'
import Joke from '../joke/Joke';
import './Jokes.css'

function Jokes() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then(response => response.json())
      .then(result => setJokes(result.jokes))
  }, [])

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

export default Jokes;