import React from 'react'
import { useState } from 'react';
import "./Detailbox.css"


const Detailbox = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('Detail-Title');
    const [description, setDescription] = useState('Add-Detail');
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      setIsEditing(false);
    };
  
    return (
      <div className='detailbox'>
        {isEditing ? (
          <div className='inputFields'>
            <input
            className='inputText'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            className='inputText'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className='saveBtn' onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <div className='mainText'>
            <h2>{title}</h2>
            <p>{description}</p>
            <button className='saveBtn' onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
    );
  };
  
  export default Detailbox;