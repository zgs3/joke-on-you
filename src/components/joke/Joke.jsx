import React from 'react'
import './Joke.css'

function Joke({ type, joke, setup, delivery }) {
  return (
    <div>
      <li>
        {type !== 'twopart'
          ? <div className='singleJoke'>
            <p className='jokeType'>Single line joke: </p>
              <p>{joke}</p>
            </div>
          : <div className='setupJoke'>
            <p className='jokeType'>Setup type joke:</p>
            <p className='jokeLine'>Setup:</p>
            <p className='jokeChild'>{setup}</p>
            <p className='jokeLine'>Delivery:</p>
            <p className='jokeChild'>{delivery}</p>
          </div>
        }
      </li>
    </div>
  )
}

export default Joke;