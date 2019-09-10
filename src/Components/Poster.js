import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 200px;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.2s linear;
`;

const Title = styled.span`
  color: #000;
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Year = styled.span`
  display: inline-block;
  color: #000;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Rating = styled.span`
  color: #000;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  transition: opacity 0.2s linear;
  position: absolute;
  bottom: 10px;
`;

const InfoContainer = styled.div`
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
`;

const ImageContainer = styled.div`
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

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Year>
            <FontAwesomeIcon icon={faHeart} />
            {'  '}
            {year}
          </Year>
          <Rating>
            <FontAwesomeIcon icon={faStar} /> {rating} / 10
          </Rating>
        </InfoContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require('../assets/noPosterSmall.png')
          }
        ></Image>
      </ImageContainer>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: Proptypes.number.isRequired,
  imageUrl: Proptypes.string,
  title: Proptypes.string.isRequired,
  rating: Proptypes.number,
  year: Proptypes.string,
  isMovie: Proptypes.bool
};

export default Poster;
