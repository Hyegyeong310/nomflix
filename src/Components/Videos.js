import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 0;
`;

const Title = styled.span`
  display: block;
  width: 100%;
  font-size: 16px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;
`;

const Grid = styled.div`
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

const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  background-color: #000;
`;

const Video = styled.iframe`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const VideoTitle = styled.span`
  display: block;
  margin-top: 5px;
`;

const Videos = ({ videos }) => {
  return (
    <Container>
      <Title>{videos.length === 1 ? 'Trailer' : 'Trailers'}</Title>
      <Grid>
        {videos.map((video, index) => (
          <VideoContainer key={index}>
            <Video
              key={video.id}
              src={`https://www.youtube.com/embed/${video.key}`}
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
              title={video.name}
            />
            <VideoTitle>
              # {index + 1} {video.name}
            </VideoTitle>
          </VideoContainer>
        ))}
      </Grid>
    </Container>
  );
};

Videos.propTypes = {
  videos: Proptypes.array.isRequired
};

export default Videos;
