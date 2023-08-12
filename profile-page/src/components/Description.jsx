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
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
    );
  };
  
  export default Description;