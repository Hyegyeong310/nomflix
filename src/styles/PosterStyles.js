import styled from 'styled-components';

export const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 200px;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.2s linear;
`;

export const Title = styled.span`
  padding: 2px;
  color: #000;
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const Year = styled.span`
  display: inline-block;
  color: #000;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const Rating = styled.span`
  color: #000;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s linear;
  position: absolute;
  bottom: 10px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    ${Image} {
      opacity: 0.3;
    }
    ${InfoContainer} {
      opacity: 1;
    }
  }
`;
