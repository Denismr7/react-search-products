import styled from 'styled-components'

export const StyledNavbar = styled.nav`
background: whitesmoke;
display: flex;
justify-content: space-between;
position: sticky;
top: 0;
width: 100%;
& h1 {
    margin-left: 0.9rem;
}

& a {
    color: black;
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