import React, { useState } from 'react';
import "./Imagetext.css";

const Imagetext = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('Image-Text');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className='imagetext'>
      {isEditing ? (
        <div className='imagetextwrapper'>
          <input className='inputText'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input className='imagetextimage'
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
          <button className='saveBtn' onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className='imagetextwrapper' >
          <h2>{title}</h2>
          {selectedImage && <img src={selectedImage} alt="SelectedImage" />}
          <button className='saveBtn' onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Imagetext;
