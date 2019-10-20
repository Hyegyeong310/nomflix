import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ImageContainer,
  InfoContainer,
  Title,
  Year,
  Rating,
  Image
} from 'styles/PosterStyles';

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <div>
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
    </div>
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
