import React from 'react'
import { Button } from './Button';
import './Hero.css';
import '../App.css';

function Hero() {
  return (
    <div class='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you Waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                CONTACT ME    
            </Button>
        </div>
    </div>
  )
}

export default Hero