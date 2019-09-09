import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({
  movieResults,
  showResults,
  searchTerm,
  error,
  loading,
  handleSubmit
}) => null;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  showResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
