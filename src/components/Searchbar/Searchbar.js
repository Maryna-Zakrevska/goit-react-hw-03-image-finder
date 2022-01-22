import PropTypes from "prop-types";
import React, { Component } from "react";
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: "",
  };

  inputQueryChange = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const formQuery = this.state.query.trim();
    if (formQuery === "") {
      toast.error("Заполните поле поиска");
      return;
    }
    this.props.onSubmit(formQuery);
    this.setState({ query: "" });
  };

  render() {
    return (
      <div>
        <header className="searchbar">
          <form className="form" onSubmit={this.formSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              onChange={this.inputQueryChange}
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

