import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
  min-height: 100vh;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 3.5vw;
  text-align: center;
  font-weight: 500;
  margin-bottom: 2rem;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 1.3vw;
  margin-top: 15px;
  transition: color 0.3s;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const Picture = styled.img`
  width: 10vw;
  max-width: 200px;
  min-width: 80px;
  height: 10vw;
  max-height: 200px;
  min-height: 80px;
  border-radius: 4px;
  border: 4px solid transparent;
  cursor: pointer;
  transition: border 0.3s, transform 0.3s;
`;

export const Item = styled.li`
  list-style-type: none;
  text-align: center;
  margin-right: 2vw;
  cursor: pointer;

  &:hover > ${Picture} {
    border: 4px solid #fff;
    transform: scale(1.05);
  }

  &:hover ${Name} {
    color: #fff;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
