import styled from 'styled-components'

const LayoutContainer = styled.section`
  max-width: 100vw;
  min-height: 100vh;

  padding: 80px 80px 0 80px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 426px) {
    padding: 40px 40px 0 40px;
  }
`;

export { LayoutContainer }