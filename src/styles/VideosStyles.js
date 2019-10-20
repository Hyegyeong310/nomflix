import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;
`;

export const Title = styled.span`
  display: block;
  width: 100%;
  font-size: 16px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;
`;

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);
  grid-template-rows: repeat(1, 50%);
  grid-auto-columns: 50%;
  grid-auto-flow: column;
  grid-gap: 10px;
`;

export const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  background-color: #000;
`;

export const Video = styled.iframe`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const VideoTitle = styled.span`
  display: block;
  margin-top: 5px;
`;
