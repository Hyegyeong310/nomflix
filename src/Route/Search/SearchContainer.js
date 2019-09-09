import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi } from 'api';
import { tvApi } from 'api';

export default class extends Component {
  state = {
    movieResults: null,
    showResults: null,
    searchTerm: '',
    error: null,
    loading: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({ searchTerm: value });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: showResults }
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, showResults });
    } catch (error) {
      this.setState({ error: `Can't find results: ${error}` });
    } finally {
      this.setState({ loading: false });
    }
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
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
