import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display: flex;
`;
const Logo = styled.img`
  height: 30px;
  margin-right: 20px;
  filter: drop-shadow(rgba(255, 255, 255, 0.7) 0px 0px 10px);
`;

const Company = ({ companies }) => (
  <Container>
    {companies.map(company => (
      <Logo
        key={company.id}
        src={
          company.logo_path !== null
            ? `https://image.tmdb.org/t/p/w300${company.logo_path}`
            : require('../assets/movie.png')
        }
      ></Logo>
    ))}
  </Container>
);

Company.propTypes = {
  companies: Proptypes.array.isRequired
};

export default Company;
