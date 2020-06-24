import styled from 'styled-components'
import colors from '../../colors'

export const StyledNavbar = styled.nav`
background: ${colors.main};
color: ${colors.accent};
display: flex;
justify-content: space-between;
align-items:center;
position: sticky;
top: 0;
width: 100%;
& img {
    width: 120px;
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