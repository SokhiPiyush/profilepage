import React from 'react'
import { useState } from 'react';
import "./Description.css"


const Description = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('Name');
    const [description, setDescription] = useState('Bio');
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      setIsEditing(false);
    };
  
    return (
      <div className='Description'>
        {isEditing ? (
          <div className='descField'>
            <input
            className='inputTextName'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            className='inputTextDesc'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className='saveBtn' onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button className='saveBtn' onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
    );
  };
  
  export default Description;