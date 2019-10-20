import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

export const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

export const Content = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Cover = styled.div`
  width: 30%;
  height: 100%;
  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
`;

export const Data = styled.div`
  display: grid;
  width: 70%;
  margin-left: 10px;
  min-height: 100%;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 800;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
`;

export const ItemContainer = styled.div`
  margin: 20px 0;
`;

export const Item = styled.span`
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
`;

export const Divider = styled.span`
  margin: 0 10px;
`;

export const Site = styled.a`
  padding: 2px 10px;
  border: 1px solid #fff;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 14px;
  text-transform: uppercase;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  filter: drop-shadow(2px 2px 6px #228dff);
  margin-right: 10px;
`;

export const Overview = styled.p`
  font-size: 14px;
  opacity: 0.7;
  font-weight: 300;
  line-height: 1.5;
  width: 50%;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
`;

export const Bottom = styled.div``;
