import styled from 'styled-components'
import colors from '../../colors'

export const StyledButton = styled.button`
    background: ${props => props.primary ? colors.important : colors.main};
    border: 2px solid ${colors.important};
    color: whitesmoke;
    font-weight: normal;
    font-size: 1.20rem;
    border-radius: 15px 2px 15px 2px;
    padding: 1rem 2rem;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background: ${colors.darkerImportant};
        border-color: ${colors.darkerImportant};
    }
`