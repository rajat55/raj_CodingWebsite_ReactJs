import React from 'react';
import Card from './Card';
import './services.css';
import courseData from './courseData';

export default function Services() {
  return (
    <div className='service-wrapper'>
        <h1>Our Services </h1>
       <div className="container-service">

        {
          courseData.map((ele,idx)=>{
           // console.log(ele);
            return <Card propValues = {ele} key={idx}/>
          })
        }
        
        
       
    </div>










    </div>
  )
}
