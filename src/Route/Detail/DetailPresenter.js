import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import { faStar, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Videos from 'Components/Videos';
import Company from 'Components/Company';
import {
  Container,
  Backdrop,
  Content,
  Cover,
  Data,
  Title,
  ItemContainer,
  Item,
  Divider,
  Site,
  SFontAwesomeIcon,
  Overview,
  Bottom
} from 'styles/DetailPresenterStyles';

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
                  {result.production_countries ? (
                    <>
                      <Divider>•</Divider>
                      <Item>
                        <SFontAwesomeIcon icon={faGlobeAmericas} />
                        {result.production_countries[0].iso_3166_1}
                      </Item>
                    </>
                  ) : (
                    <>
                      <Divider>•</Divider>
                      <Item>
                        <SFontAwesomeIcon icon={faGlobeAmericas} />
                        {result.origin_country[0]}
                      </Item>
                    </>
                  )}
                </ItemContainer>
                {result.imdb_id ? (
                  <ItemContainer>
                    <Site
                      href={`https://www.imdb.com/title/${result.imdb_id}`}
                      target="_blank"
                    >
                      View IMDb
                    </Site>
                    {result.homepage && (
                      <Site href={result.homepage} target="_blank">
                        Official
                      </Site>
                    )}
                  </ItemContainer>
                ) : null}
                <Overview>{result.overview && result.overview}</Overview>
                {result.videos && result.videos.results.length > 0 && (
                  <Videos videos={result.videos.results} />
                )}
                <Bottom>
                  {result.production_companies &&
                    result.production_companies.length > 0 && (
                      <Company companies={result.production_companies} />
                    )}
                </Bottom>
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
