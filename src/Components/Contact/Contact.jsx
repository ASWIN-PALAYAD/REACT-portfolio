import React,{useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

import{themeContext} from '../../Context';
import{useContext} from 'react';


const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [done, setDone] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm( 'service_r9hkdh2', 'template_0ngruie', form.current, '6OTJBce2ehasX0U9e' )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };



  return (

    <div className="contact-form">
        <div className="w-left">
            <div className="awosome">
                <span style={{color:darkMode?'white' : ''}} >Get in touch</span>
                <span>Contact me</span>
                <div
                className='blur s-blur1'
                style={{background:'#ABF1FF94'}}>
                </div>
            </div>
        </div>


        {/* FORM RIGHT SIDE */}

            <div className="c-right">
                <form  ref={form} onSubmit={sendEmail} >
                    <input type="text" name='user-name' className='user' placeholder='Name' />
                    <input type='email' name='user-email' className='user' placeholder='Email'  />
                    <textarea name="message" className='user' placeholder='Message'></textarea>
                    <input type='submit' value='Send' className='button' />
                    <span>{done && 'Thanks for contacting me..!'}</span>

                    <div 
                    className='blur c-blur1'
                    style={{background:'var(--purple)'}}> 

                    </div>
                </form>
            </div>

    </div>
  )
}

export default Contact