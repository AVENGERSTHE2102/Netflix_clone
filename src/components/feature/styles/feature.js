import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 100px 45px;
  width: 100%;
`;

export const Title = styled.h1`
  color: white;
  max-width: 800px;
  font-size: 64px;
  font-weight: 600;
  margin: auto;
  line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 24px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
