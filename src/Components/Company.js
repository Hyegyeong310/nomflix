import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display: flex;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
  margin-right: 20px;
  margin-bottom: 5px;
  filter: drop-shadow(rgba(255, 255, 255, 0.7) 0px 0px 10px);
`;

const Name = styled.span`
  margin-right: 20px;
`;

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
