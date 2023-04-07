import React from 'react';
import './form.css';
import { useState } from 'react';

export default function Form() {
    const obj = {
        name:"",
        email:"",
        comment:""
    }
   const [objState,setobj] = useState(obj);

    const handlclick = () =>{
        alert(`Hi ${objState.name} Welcome to our Webpage your Email is ${objState.email} and your Comment is ${objState.comment} h`);
    }
    const handleChange = (e) =>{
       const newObj = {
        ...objState,
        [e.target.name]:e.target.value
       }
       setobj(newObj);
       
    }
  return (
    <div className='wrap'>
        <div className="container-form">
            <div className="header-Form">Enter Your Details</div>
                <input type="text" name="name" value={objState.name}onChange={handleChange} placeholder='Enter Your Name ' />
                <input type="text" name="email" value={objState.email}onChange={handleChange}placeholder='Enter Your Email'/>
                <textarea name="comment" onChange={handleChange} value={objState.comment}placeholder='Comments' id="" cols="30" rows="10"></textarea>
                <button onClick={handlclick}>Summit</button>
            
        </div>
    </div>
  )
}
