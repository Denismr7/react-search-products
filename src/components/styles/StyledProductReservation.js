import styled from 'styled-components'
import colors from '../../colors'

export const ProdResContainer = styled.div`
display: flex;
flex-direction: column;
width: 90vw;
max-width: 40rem;
color: ${colors.main};
.datesPriceContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.datesContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
& h4 {
    margin-bottom: 0.5rem;
}
& input {
    color: ${colors.main};
}

& button {
    margin-bottom: 2rem;
}
#startDateSpan {
    margin-left: 2rem;
}
& h3 {
    text-align: right;
}
`