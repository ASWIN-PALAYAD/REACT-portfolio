import React from 'react'
import './Services.css'

import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './aipp nova.pdf';

import{themeContext} from '../../Context';
import{useContext} from 'react';

const Services = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">

        {/* left side section */}

        <div className="awosome">
            <span style={{color: darkMode? 'white' : ''}} >My Awesome</span>
            <span>services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, <br /> sequi incidunt cumque, facilis sint soluta a maiores 
            </span>

            <a href={Resume} download >
                 <button className='button s-button' >Download CV</button>
            </a>
            {/* blur div */}
            <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
        </div>

        {/* right side section */} 
        
        <div className="cards" >

            {/* card 1 */}

            <div style={{left:'14rem'}}>
                <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={'Figma,Sketch,Photoshop, Adobe,Adobe xd'}
                />
            </div>

            {/* card 2 */}
            
            <div style={{top:'12rem',left:'-4rem'}}>
                <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={'Html, Css, JavaScript, React'}
                />
            </div>

            {/* card 3 */}

            <div style={{top:'19rem',left:'12rem'}} >
                <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident'}
                />
            </div>

            {/* blur card */}

            <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>

        </div>
    </div>
  )
}

export default Services