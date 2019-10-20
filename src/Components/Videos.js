import React from 'react';
import Proptypes from 'prop-types';
import {
  Container,
  Title,
  Grid,
  VideoContainer,
  Video,
  VideoTitle
} from 'styles/VideosStyles';

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
