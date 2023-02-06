import React from 'react';

function Modal({ currentPhoto, setIsModalOpen }) {
  const {name, category, description, index} = currentPhoto;

  function btnClick() {
    setIsModalOpen(false)
  }

  return(
    <div className='modalBackdrop'>
      <div className='modalContainer'>
        <h3 className='modalTitle'>{name}</h3>
        <img 
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt={name} 
          key={name}
        />
        <p>
          {description}
        </p>
        <button type='button' onClick={btnClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;