import styled from 'styled-components'
import colors from '../../colors'

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledSearchBar = styled.input`
  width: 80%;
  max-width: 50rem;
  height: 3rem;
  border: 2px solid ${colors.main};
  background-color: ${colors.accent};
  background-image: url('https://image.flaticon.com/icons/svg/483/483356.svg');
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 1rem;
  font-size: 1.5rem;
  color: ${colors.important};
  padding-left: 3vw;
  border-radius: 3px;
`