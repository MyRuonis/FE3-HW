import React from 'react';
import { connect } from 'react-redux';
import { toggleCards } from '../actions';
import {getGenres, getMostPopularMovies} from '../thunks';
import Card from './Card';
import { getImageUrl } from '../config';

class App extends React.Component {
  componentDidMount() {
    this.props.onGetMostPopularMovies(-1);
    this.props.onGetGenres();
  }
  
  render() {
    return (
      <div className="container">
        <header>
          <button
            style={{ display: 'block', margin: '0 auto' }}
            onClick={() => this.props.onToggleCards(!this.props.showCards)}
          >
            Hide movies
          </button>
        </header>

        {this.props.genres.map((genre) => (
                      <button key={genre.id} onClick={() => this.props.onGetMostPopularMovies(genre.id)}>{genre.name}</button>
                  ))}
        
        {this.props.showCards
          ? (
            <div className="cards">
              {this.props.mostPopularMovies.map((card) => (
                <Card
                  key={card.original_title}
                  backgroundImage={getImageUrl(card.backdrop_path)}
                  date={card.release_date}
                  rating={card.vote_average}
                  votes={card.vote_count}
                  description={card.overview}
                  title={card.original_title}
                />
              ))}
            </div>
          )
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showCards: state.componentState.showCards,
  mostPopularMovies: state.cards.mostPopular,
  genres: state.genres.genres,
  hearted: state.hearted,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleCards: (shouldShow) => dispatch(toggleCards(shouldShow)),
  onGetMostPopularMovies: ($genre) => dispatch(getMostPopularMovies($genre)),
  onGetGenres: () => dispatch(getGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
