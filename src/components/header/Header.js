import React from 'react';
import {Link} from 'react-scroll';
import './header.css';

const Header =()=>
{
    return(
        <div className='header'>
            <div className='header__left'>
                <h1>Develop<span>er</span></h1>
            </div>
            <div className='header__right'>
               <Link to="about" smooth={true} duration={1000}>
                <h4>About Me</h4>
               </Link>

               <Link to="skills" smooth={true} duration={1000}>
                <h4>Skills</h4>
               </Link>

               <Link to="project" smooth={true} duration={1000}>
                <h4>Projects</h4>
               </Link>

               <Link to="contact" smooth={true} duration={1000}>
                <h4>Contact Me</h4>
               </Link>


            </div>
        </div>

    );
}

export default Header;