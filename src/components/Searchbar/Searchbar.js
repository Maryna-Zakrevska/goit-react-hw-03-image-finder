import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  state = {
    searchQuery: '',
  };
  inputQueryChange = e => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  };
  formSubmit = e => {
    e.preventDefault();
    const formQuery = this.state.searchQuery.trim();
    if (formQuery === '') {
      toast.error('Заполните поле поиска');
      return;
    }
    this.props.onSubmit(formQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <header>
          <form onSubmit={this.formSubmit}>
            <label>
              <input
                name="searchQuery"
                value={searchQuery}
                onChange={this.inputQueryChange}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </label>
            <button
              type="submit"
              disabled={this.props.status === 'pending'}
            >
              <FaSearch/>
              <span>Search</span>
            </button>
          </form>
        </header>
      </div>
    );
  }
}