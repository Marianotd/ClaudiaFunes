import React from 'react'
import { CgClose } from "react-icons/cg";

export default function ModalItem({ item }) {
  let cadenaId = (item.name).replaceAll([" "], "-")

  const closeModal = () => {
    window.location.hash = '/';
  };

  return (
    <div id={cadenaId} key={item.name} className={"modalContainer"}>
      <div className="modalItem">
        <div className='modalHeader'>
          <h4>{item.name}</h4>
          <CgClose className='closeButton closeButton--xl' onClick={closeModal} />
        </div>

        <div className='modalImg'>
          <img src={item.img} alt={item.name} />
        </div>

        <div className='modalDescription'>
          {item.description}
        </div>
      </div>
    </div>
  )
}
