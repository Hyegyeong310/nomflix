import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  /* box-shadow: 0 1px 5px 10px rgba(0, 0, 0, 0.8); */
  z-index: 10;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 140px;
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    height: 30px;
    width: 100%;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.79) 8.1%,
      rgba(0, 0, 0, 0.761) 15.5%,
      rgba(0, 0, 0, 0.717) 22.5%,
      rgba(0, 0, 0, 0.66) 29%,
      rgba(0, 0, 0, 0.593) 35.3%,
      rgba(0, 0, 0, 0.518) 41.2%,
      rgba(0, 0, 0, 0.44) 47.1%,
      rgba(0, 0, 0, 0.36) 52.9%,
      rgba(0, 0, 0, 0.282) 58.8%,
      rgba(0, 0, 0, 0.207) 64.7%,
      rgba(0, 0, 0, 0.14) 71%,
      rgba(0, 0, 0, 0.083) 77.5%,
      rgba(0, 0, 0, 0.039) 84.5%,
      rgba(0, 0, 0, 0.01) 91.9%,
      transparent 100%
    );
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: 80px;
  height: 60px;
  text-align: center;
  transition: border-bottom 0.3s ease-in-out;
`;

export const SLink = styled(Link)`
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.div`
  width: 100%;
  height: 25px;
  position: relative;
  margin-bottom: 10px;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  &::before {
    content: '';
    z-index: -1;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -45%);
    border-radius: 50%;
    background-color: transparent;
    box-shadow: ${({ current }) =>
      current ? '0px 0px 22px 18px #228dff' : 'transparent'};
  }
`;

export const Text = styled.span`
  font-size: 10px;
`;
