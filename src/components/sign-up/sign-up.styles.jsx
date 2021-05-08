import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    margin-right: 10px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    text-align: center;
    margin: 0;
  }
`;

export const SignUpSubTitle = styled.span`
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;
