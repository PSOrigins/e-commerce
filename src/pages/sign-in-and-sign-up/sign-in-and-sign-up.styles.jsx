import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (min-width: 800px) {
    display: gird;
    grid-template-columns: 1fr;
  }
`;
