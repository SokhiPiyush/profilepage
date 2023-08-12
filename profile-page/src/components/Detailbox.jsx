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
  
  export default Detailbox;