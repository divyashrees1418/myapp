import React from 'react';
import {Element} from 'react-scroll';
import './Projectcontainer.css';
import Projectcontent from '../projectcontent/Projectcontent';
import calculator  from '../../assets/calculator.jpg';
import Atm from '../../assets/Atm.jpg';
import Todolist from '../../assets/Todolist.png';
import rpv from '../../assets/rpv.webp';
import diary from '../../assets/diary.jpg';
import gym from '../../assets/gym.jpg';




const Projectcontainer=()=>{

    const project1={
            imgurl:Atm,
            name:"ATM",
            descr:"It is built by using pure Java basic concepts",
            url:"https://github.com/divyashrees1418/ATM"
    };

  const project2={
            imgurl:calculator,
            name:"Calculator",
            descr:"It is built by using pure Java basic concepts",
            url:"https://github.com/divyashrees1418/Calculator"
        
    };

    const project3={
      imgurl:Todolist,
      name:"To do list",
      descr:"It is built by using HTML,CSS and Reactjs",
      url:"https://github.com/divyashrees1418/TODOLIST"
  
};

const project4={
  imgurl:gym,
  name:"Gym Web Application",
  descr:"It is built by using HTML,CSS and JAVASCRIPT",
  url:"https://github.com/divyashrees1418/Gym-Web-Application"

};

const project5={
  imgurl:diary,
  name:"Digital-Personal-Diary",
  descr:"It is built by using HTML,CSS and JAVASCRIPT",
  url:"https://github.com/divyashrees1418/Digital-Personal-Diary"

};

const project6={
  imgurl:rpv,
  name:"Residential Property valuation",
  descr:"It is built by using HTML,CSS and flask",
  url:"https://github.com/divyashrees1418/RPV"

};
    return(
        <Element id="project" className="projectcontainer">
            <h2>Projects</h2>
            <h3>Here are some projects</h3>
            <div className='projectcontainer_project'>
              <Projectcontent projectdetail={project1}/>
              <Projectcontent projectdetail={project2}/>
              <Projectcontent projectdetail={project3}/>
              <Projectcontent projectdetail={project4}/>
              <Projectcontent projectdetail={project5}/>
              <Projectcontent projectdetail={project6}/>


            </div>

        </Element>

    )
}

export default Projectcontainer