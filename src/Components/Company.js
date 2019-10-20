import React from 'react';
import Proptypes from 'prop-types';
import { Container, ItemContainer, Logo, Name } from 'styles/ComponyStyles';

const Company = ({ companies }) => (
  <Container>
    {companies.map(company => (
      <ItemContainer key={company.id}>
        {company.logo_path !== null ? (
          <>
            <Logo
              key={company.id}
              src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
            ></Logo>
            <Name>{company.name}</Name>
          </>
        ) : (
          <Name>{company.name}</Name>
        )}
      </ItemContainer>
    ))}
  </Container>
);

Company.propTypes = {
  companies: Proptypes.array.isRequired
};

export default Company;
