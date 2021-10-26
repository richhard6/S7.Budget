import { Start, Title, Wrapper } from './styles'

import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <Wrapper>
      <Title>Welcome to CreateYourBudget</Title>

      <Link to="/budget">
        <Start>START</Start>
      </Link>
    </Wrapper>
  )
}

export default Welcome
