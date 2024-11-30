import React from 'react'
import './RightSection.css'

const RightSection = () => {
  return (
    <div className='rightSection_container'>
      <div className="right_highlights">
        <div className='highlight_box'>
          <a className='blink_me' href="">
          <p>New Zealand v England</p>
          </a>
        </div>
        <div className='highlight_box'>
          <a className='blink_me' href="">
            <p>South Africa Women v Eng...</p>
          </a>
        </div>
        <div className='highlight_box'>
          <a className='blink_me' href="">
            <p>AC Milan v Empoli</p>
          </a>
        </div>
        <div className='highlight_box'>
          <a className='blink_me' href="">
            <p>West Ham v Arsenal</p>
          </a>
        </div>
        <div className='highlight_box'>
          <a className='blink_me' href="">
            <p>Dortmund v Bayern Munich</p>
          </a>
        </div>
      </div>

      {/* games lists bar */}
      <div className="game_bar">
        <ul className="boxes">
          <li>Politics</li>
          <li>Cricket</li>
          <li>Football</li>
          <li>Tennis</li>
          <li>Kabaddi</li>
          <li>Esoccer</li>
          <li>Horse Racing</li>
          <li>Greyhound Racing</li>
          <li>Table Tennis</li>
          <li>Basketball</li>
          <li>Boxing</li>
          <li>Mixed Martial Arts</li>
          <li>American Football</li>
          <li>Volleyball</li>
          <li>Badminton</li>
          <li>Snooker</li>
          <li>Ice Hockey</li>
          <li>E Games</li>
          <li>Futsal</li>
          <li>Handball</li>
          <li>Motor Sports</li>
        </ul>
      </div>
    </div>
  )
}

export default RightSection
