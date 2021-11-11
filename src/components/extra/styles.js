import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Input = styled.input`
  width: 25%;
  padding: 1.5rem;
  text-align: center;
  & {
    outline: none;
  }
  margin-top: 1rem;
`

export const Button = styled.button`
  color: white;
  cursor: pointer;
  font-size: ${(props) => (props.size ? '1rem' : '2.5rem')};
  border: none;
  background-color: orange;
  border-radius: 7px;
  margin-top: 1rem;
`

export const WrapperButton = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Label = styled.label`
  font-weight: 300;
`
