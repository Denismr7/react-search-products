import styled from 'styled-components'
import colors from '../../colors'

export const StyledButton = styled.button`
    background: ${props => props.primary ? colors.important : "transparent"};
    border: 2px solid ${colors.important};
    color: whitesmoke;
    font-weight: normal;
    font-size: 1.05rem;
    border-radius: 2px;
    padding: 1rem 2rem;
    width: 100%;
    cursor: pointer;
`