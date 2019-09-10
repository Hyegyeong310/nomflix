import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Videos from 'Components/Videos';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 800;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Imdb = styled.a`
  padding: 2px 10px;
  border: 1px solid #fff;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 14px;
  text-transform: uppercase;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  filter: drop-shadow(2px 2px 6px #228dff);
  margin-right: 10px;
`;

const Overview = styled.p`
  font-size: 14px;
  opacity: 0.7;
  font-weight: 300;
  line-height: 1.5;
  width: 50%;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
`;

const DetailPresenter = ({ result, error, loading }) => {
  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading | Nomflix</title>
        </Helmet>
        <Loader />
      </>
    );
  } else {
    const year = result.release_date
      ? result.release_date.substring(0, 4)
      : result.first_air_date.substring(0, 4);
    return (
      <>
        {error ? (
          <Message text={error} color="#e74c3c" />
        ) : (
          <Container>
            <Helmet>
              <title>
                {result.original_title
                  ? result.original_title
                  : result.original_name}{' '}
                | Nomflix
              </title>
            </Helmet>
            <Backdrop
              bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            ></Backdrop>
            <Content>
              <Cover
                bgImage={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                    : require('../../assets/noPosterSmall.png')
                }
              />
              <Data>
                <Title>
                  {result.original_title
                    ? result.original_title
                    : result.original_name}{' '}
                  ({year})
                </Title>
                <ItemContainer>
                  <Item>
                    {result.genres &&
                      result.genres.length > 0 &&
                      result.genres.map((genre, index) =>
                        index === result.genres.length - 1
                          ? genre.name
                          : `${genre.name} / `
                      )}
                  </Item>
                  <Divider>•</Divider>
                  <Item>
                    <SFontAwesomeIcon icon={faCalendarAlt} />
                    {year}
                  </Item>
                  <Divider>•</Divider>
                  <Item>
                    <SFontAwesomeIcon icon={faClock} />
                    {result.runtime
                      ? result.runtime
                      : result.episode_run_time}{' '}
                    min
                  </Item>
                  <Divider>•</Divider>
                  <Item>
                    <SFontAwesomeIcon icon={faStar} />({result.vote_average})
                  </Item>
                </ItemContainer>
                {result.imdb_id ? (
                  <ItemContainer>
                    <Imdb
                      href={`https://www.imdb.com/title/${result.imdb_id}`}
                      target="_blank"
                    >
                      View IMDb
                    </Imdb>
                  </ItemContainer>
                ) : null}
                <Overview>{result.overview && result.overview}</Overview>
                {result.videos && result.videos.results.length > 0 && (
                  <Videos videos={result.videos.results} />
                )}
              </Data>
            </Content>
          </Container>
        )}
      </>
    );
  }
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
