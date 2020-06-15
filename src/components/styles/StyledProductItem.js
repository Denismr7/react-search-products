import styled from 'styled-components'
import colors from '../../colors'

export const StyledItem = styled.div`
  background-color: white;
  border: 1px solid ${colors.blue};
  margin: 1vh;
  padding: 3%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.3);
  & img {
      width: 100px;
      margin: 0 auto;
  }
  & a button {
      width: 100%;
  }
`