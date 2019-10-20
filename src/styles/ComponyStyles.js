import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.img`
  height: 30px;
  margin-right: 20px;
  margin-bottom: 5px;
  filter: drop-shadow(rgba(255, 255, 255, 0.7) 0px 0px 10px);
`;

export const Name = styled.span`
  margin-right: 20px;
`;
