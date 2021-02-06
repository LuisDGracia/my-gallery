import styled from 'styled-components'

const GridContainer = styled.div`
  width: 100%;
  margin-top: 40px;

  display: grid;
  grid-template: repeat(3, 1fr) / auto;
  grid-gap: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 10px;

  ${ ({ column, row }) => (`
    grid-column: ${ column } ;
    grid-row: ${ row } ;
  `)}
`

export { GridContainer, Image }
