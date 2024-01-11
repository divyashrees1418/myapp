import React from 'react';
import './projectcontent.css';

const defaultpoject={
    imgurl:'not provide',
    name:"not provide",
    descr:"not provide",
    url:"not provide"
}

const Projectcontent=({projectdetail=defaultpoject})=>
{
   const {imgurl,name,descr,url}=projectdetail;

    return(
        <div className='project_container'>
        <a href={url}>
          <img src={imgurl} alt=""></img>
        </a>

        <p>{name}</p>
        <p>{descr}</p>
        </div>

    )
}

export default Projectcontent;