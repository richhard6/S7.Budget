import styled from 'styled-components'

export const ModalBody = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 21;
`

export const ModalContent = styled.div`
  background: white;
  width: 300px;
  padding: 10px 20px;
  height: 10vh;
  margin: 10vh auto;
  position: relative;
  opacity: 0.5;
`
