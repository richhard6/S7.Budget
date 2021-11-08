import { useState, useEffect, useRef } from 'react'
import { Button } from '../extra/styles'

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

  //se podria hacer otro bototn diferente para la i de info

  //faltan styled para ese div ref y para la P

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>i</Button>
      {showModal && (
        <Modal onClose={handleClose}>
          <p>{text}</p>
        </Modal>
      )}
    </div>
  )
}

export default Info
