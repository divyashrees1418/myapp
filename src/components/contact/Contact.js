import React from 'react';
import { Element } from 'react-scroll';
import './contact.css';

const Contact =()=>
{
    return(
        <Element id='contact' className='contact'>
            <h1>Contact Me</h1>
            <div className='contact_container'>
                <p>Email:<span> divyashrees262002@gmail.com</span></p>
                <p>Github:<span> https://github.com/divyashrees1418</span></p>
                <p>LinkedIn:<span> https://www.linkedin.com/in/divya-shree-s-229b39234</span></p>
                <p>Phone:<span> +91 - 73977 98550</span></p>
            </div>
            

        </Element>

    )
}

export default Contact;