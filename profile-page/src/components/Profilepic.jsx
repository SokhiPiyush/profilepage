import React from 'react';
import "./profilepic.css";

export default function profilepic(props) {
  return (
    <div className='profilepic'>
        <img className='pic' src={props.img} alt='profilepic'></img>
        <div className='profilepicdetails'>
        <h3>
            {props.name}
        </h3>
        <h4>{props.email}</h4>
        </div>
    </div>
  )
}
