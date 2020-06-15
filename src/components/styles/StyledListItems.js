import styled from 'styled-components'

export const StyledItemsCont = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, 80vw);
@media screen and (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
}
justify-content: center;
margin-top: 5vh;
`