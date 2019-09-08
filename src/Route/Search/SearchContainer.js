import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends Component {
  state = {
    movieResults: null,
    showResults: null,
    searchTerm: '',
    error: null,
    loading: false
  };
  render() {
    const {
      movieResults,
      showResults,
      searchTerm,
      error,
      loading
    } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        showResults={showResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}
