import React from 'react'
import './Works.css'

import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png'; 


import{themeContext} from '../../Context';
import{useContext} from 'react';

const Works = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    return (
        <div className="works">
            {/* left side section */}

            <div className="awosome">
                <span style={{color:darkMode?'white' : ''}} >Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
                    <br />
                    sequi incidunt cumque, facilis sint soluta a maiores
                    <br />
                    sequi incidunt cumque, facilis sint soluta a maiores
                    <br />
                    sequi incidunt cumque, facilis sint soluta a maiores
                </span>

                <button className='button s-button' >Hire me</button>
                {/* blur div */}
                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* right side section */}

            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>

                </div>

                {/* background circle */}

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>

        </div>
    )
}

export default Works