import React, { Component } from "react";
import { Searchbar } from "components/Searchbar/Searchbar";
import { getImages } from "servises/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ToastContainer } from "react-toastify";
import { Button } from "./Button/Button";
import "react-toastify/dist/ReactToastify.css";

export class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    images: [],
    showModal: false,
    loading: false,
  };

  componentDidMount() {
    /* const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    const images = this.getImages(searchQuery, page);
    images
      .then(res => res.json())
      .then(console.log)
      .then(() => this.setState({ loading: false })); */
  }

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
   

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ loading: true });
      getImages(searchQuery, page)
        .then((response) => response.json())
        .then((response) => this.setState({ images: response.hits, loading: false }));
    }
    if (prevState.page < page) {
      this.setState({ loading: true });
      getImages(searchQuery, page)
        .then((response) => response.json())
        .then((response) => this.setState(prevState => {
          return {
            images: [...prevState.images, ...response.hits],
            loading: false,
          };
        }));
    }
  }

  searchQuerySubmit = (inputQuery) => {
    const prevQuery = this.state.searchQuery;
    if (prevQuery !== inputQuery) {
      this.setState({ searchQuery: inputQuery });
    }
  };

  loadMoreImages = () => {
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
  };

  render() {
    const { images } = this.state;
    const notEmptyImages = images?.length > 0;
    return (
      <div>
        <Searchbar onSubmit={this.searchQuerySubmit} />
        {notEmptyImages && <ImageGallery images={images} openModal={this.openModal} />}
        <ToastContainer autoClose={2500} />
        <Button type="button" loadMoreImages={this.loadMoreImages}>
          Load More
        </Button>
      </div>
    );
  }
}
