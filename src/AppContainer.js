import React, { Component } from 'react';
import RouterWrapper from 'Libs/RouterWrapper';
import * as Pages from 'Pages';
import MovieService from 'Services/MovieService';
import Navbar from 'Components/Navbar/Navbar';
import GenresMenu from 'Components/GenresMenu/GenresMenu';

import Footer from 'Components/Footer/Footer';
import SearchBar from 'Components/SearchBar/SearchBar';
import { connect } from 'react-redux';
import { SearchAction } from 'Reducers/search/actions';
import './AppContainer.scss';

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: [{
        label: 'Movies',
        onClick: () => {
          if (this.props.location.pathname !== '/searchpage') {
            this.props.history.push({
              pathname: '/searchpage'
            })
          }
          MovieService.getMovieGenres();
        }
      },
      {
        label: 'My Favourites',
        url: '/#/favouritesPage'
      }
      ]
    };
    this.doSearchMovies = this.doSearchMovies.bind(this);
    this.onChangeKeywords = this.onChangeKeywords.bind(this);
    this.onNavbarClick = this.onNavbarClick.bind(this);
  }

  /**
   * 
   * @param {*} e Search movies
   */
  doSearchMovies(e) {
    // prevent form action casue page refresh
    e.preventDefault();
    if (this.props.location.pathname !== '/searchpage') {
      this.props.history.push({
        pathname: '/searchpage'
      })
    }
    MovieService.filterMovies(this.props.keywords);
  }
  /**
   * 
   * @param {*} e Update search bar text keyword to state
   */
  onChangeKeywords(e) {
    SearchAction.updateKeywords(e.target.value)
  }
  componentDidMount() {
    // Initial fetch movies data
    MovieService.getMovies();
    // Fetch genres data for nav bar
    MovieService.getMovieGenres();
  }
  onNavbarClick(item) {
    if (this.props.location.pathname !== '/searchpage') {
      this.props.history.push({
        pathname: '/searchpage'
      })
    }
    SearchAction.updateGenresId(item.id);
    MovieService.getMoviesByGenres(item.id);
  }
  render() {
    const routeUrls = Object.keys(Pages).map(Page => Page.toLowerCase());
    const indexRoute = this.props.location.pathname === '/' ? routeUrls[0] : this.props.location.pathname;
    const genres = this.props.genres && this.props.genres.map(item => {
      return {
        id: item.id,
        label: item.name,
        active: this.props.genresId === item.id,
        onClick: () => {
          this.onNavbarClick(item);
        }
      }
    });

    const content = <RouterWrapper indexRoute={indexRoute}>
      {
        Object.keys(Pages).map((name) => {
          const Page = Pages[name];
          return <Page key={name} className={name} />
        })
      }
    </RouterWrapper>;
    return <div className="container">
      <Navbar
        navs={this.state.navbar}
        user={this.props.user}
        activeId={this.props.genresId}
      />
      <GenresMenu
        genres={genres}
        activeId={this.props.genresId}
      />

      <SearchBar
        keywords={this.props.keywords}
        onSubmit={this.doSearchMovies}
        onChange={this.onChangeKeywords}
      />
      {content}
      <Footer {...this.props.footer} />
    </div>
  }
}

const mapStateToProps = state => {
  return {
    footer: state.app.footer,
    genres: state.search.genres,
    genresId: state.search.filters.genresId,
    keywords: state.search.filters.keywords,
    user: state.app.user
  }
}


const ReduxContainer = connect(
  mapStateToProps
)(AppContainer)

export default ReduxContainer;