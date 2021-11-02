import { useState, useEffect, useRef } from 'react'

import Modal from '../modal/Modal'

function Info({ text }) {
  const ref = useRef()
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showModal && ref.current && !ref.current.contains(e.target)) {
        setShowModal(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [showModal])

  return (
    <div ref={ref}>
      <button onClick={handleClick}>i</button>
      {showModal && (
        <Modal onClose={handleClose}>
          <p>{text}</p>
        </Modal>
      )}
    </div>
  )
}

export default Info
