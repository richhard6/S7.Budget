import { useState } from 'react'

import Modal from '../modal/Modal'

function Info({ text }) {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }
  //hay quje hacer que se cierre caiundo clicamps afuera, no solo la X del boton..... y tambien crear styled comPOnents para el text.
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <>
      <button onClick={handleClick}>i</button>
      {showModal && (
        <Modal onClose={handleClose}>
          <p>{text}</p>
        </Modal>
      )}
    </>
  )
}

export default Info
