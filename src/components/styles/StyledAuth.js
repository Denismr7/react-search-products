import styled from 'styled-components'
import colors from '../../colors'

export const StyledForm = styled.form`
    background: ${colors.lightBlue};
    display: flex;
    flex-direction: column;
    width: 20rem;
    border-radius: 3px;
    margin: 3vh auto;
    padding: 2vh 4vw;
    & a {
        color: ${colors.black};
        text-decoration: none;
        font-size: 0.8rem;
        margin: 1rem auto 0 auto;
    }

`

export const StyledLabel = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 3rem;
`

export const StyledInput = styled.input`
    height: 2rem;
    margin-top: 0.3rem;
    border: 2px solid ${colors.green};
    background: rgba(78, 190, 158, 0.2);
    opacity: 0.7;
    border-radius: 3px;
    padding-left: 0.4rem;
    font-size: 1.07rem;
    color: ${colors.black};
    &:focus {
        background: rgba(78, 190, 158, 0.3);
        opacity: 1;
    }
`
export const StyledSpanError = styled.span`
    display: none;
    font-size: 0.8rem;
    margin-top: 0.1rem;
    color: red;
`