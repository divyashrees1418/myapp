import React from 'react';
import { Element } from 'react-scroll';
import computer from '../../assets/computer.jpg'
import LinerarProgress from '@mui/material/LinearProgress';
import './skillcontainer.css';

const Skillcontainer=()=>
{
    return(
      <Element id="skills" className='skillcontainer'>
        <div className='skillcontainer_img'>
          <img src={computer} alt=""></img>
        </div>
        <div className='skillcontainer__text'>
          <h2>SkillSets</h2>
          <div className='skillcontainer__skillsets'>
            <h2>HTML</h2>
            <div className='skillcontainer__slider skillcontainer__slider1'>
              <LinerarProgress variant="determinate" value={90}/>
            </div> 
          </div>

          <div className='skillcontainer__skillsets'>
            <h2>CSS</h2>
            <div className='skillcontainer__slider skillcontainer__slider2'>
              <LinerarProgress variant="determinate" value={90}/>
            </div> 
          </div>

          <div className='skillcontainer__skillsets'>
            <h2>JAVASCRIPT</h2>
            <div className='skillcontainer__slider skillcontainer__slider2'>
              <LinerarProgress variant="determinate" value={90}/>
            </div> 
          </div>

          <div className='skillcontainer__skillsets'>
            <h2>JAVA</h2>
            <div className='skillcontainer__slider skillcontainer__slider3'>
              <LinerarProgress variant="determinate" value={80}/>
            </div> 
          </div>

          <div className='skillcontainer__skillsets'>
            <h2>REACTJS</h2>
            <div className='skillcontainer__slider skillcontainer__slider4'>
              <LinerarProgress variant="determinate" value={70}/>
            </div> 
          </div>


        </div>

      </Element>

    )
}

export default Skillcontainer;