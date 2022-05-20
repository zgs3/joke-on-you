import React from 'react';
import './Header.css';
import Joke2 from '../../assets/joke2.png'

function Header() {
  return (
    <div className='headerContainer'>
      <h1>Joke on YOU!</h1>
      <img src={Joke2} className='joke2' alt='meme troll'></img>
    </div>
  )
}

export default Header;