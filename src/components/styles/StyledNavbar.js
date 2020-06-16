import styled from 'styled-components'
import colors from '../../colors'

export const StyledNavbar = styled.nav`
background: ${colors.black};
color: ${colors.lightBlue};
display: flex;
justify-content: space-between;
position: sticky;
top: 0;
width: 100%;
& h1 {
    margin-left: 0.9rem;
}

& a {
    color: inherit;
    text-decoration: none;
}
& ul {
    list-style: none;
    display: flex;
    align-items:center;
    width: 90%;
    justify-content: space-evenly;
    cursor: pointer;
}
 & .fa {
     font-size: 1.2rem;
     margin-right: 0.4rem;
 }

 & span {
     font-weight: lighter;
 }
`